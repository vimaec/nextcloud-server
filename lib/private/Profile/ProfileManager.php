<?php

declare(strict_types=1);

/**
 * @copyright 2021 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OC\Profile;

use function Safe\usort;
use OC\Core\Db\ProfileConfig;
use OC\Core\Db\ProfileConfigMapper;
use OC\KnownUser\KnownUserService;
use OCP\Accounts\IAccountManager;
use OCP\Accounts\IAccountProperty;
use OCP\Accounts\PropertyDoesNotExistException;
use OCP\App\IAppManager;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IUser;
use OCP\Profile\IAction;
use OCP\Profile\IProfileManager;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\ContainerInterface;
use Psr\Container\NotFoundExceptionInterface;
use Psr\Log\LoggerInterface;
use TypeError;

/**
 * @inheritDoc
 */
class ProfileManager implements IProfileManager {

	/** @var IAccountManager */
	private $accountManager;

	/** @var IAppManager */
	private $appManager;

	/** @var ProfileConfigMapper */
	private $configMapper;

	/** @var ContainerInterface */
	private $container;

	/** @var KnownUserService */
	private $knownUserService;

	/** @var LoggerInterface */
	private $logger;

	/** @var IAction[] */
	private $actions = [];

	/** @var string[] */
	private $appActionQueue = [];

	public function __construct(
		IAccountManager $accountManager,
		IAppManager $appManager,
		ProfileConfigMapper $configMapper,
		ContainerInterface $container,
		KnownUserService $knownUserService,
		LoggerInterface $logger
	) {
		$this->accountManager = $accountManager;
		$this->appManager = $appManager;
		$this->configMapper = $configMapper;
		$this->container = $container;
		$this->knownUserService = $knownUserService;
		$this->logger = $logger;
	}

	/**
	 * @inheritDoc
	 */
	public function queueAction(string $actionClass): void {
		$this->appActionQueue[] = $actionClass;
	}

	/**
	 * Register an action for the user
	 */
	private function registerAction(IUser $targetUser, ?IUser $visitingUser, IAction $action): void {
		if ($action->getAppId() !== 'core') {
			if (!$this->appManager->isEnabledForUser($action->getAppId(), $targetUser)) {
				$this->logger->notice('App: ' . $action->getAppId() . ' is not enabled for the user profile: ' . $targetUser->getUID());
				return;
			}
			if (!$this->appManager->isEnabledForUser($action->getAppId(), $visitingUser)) {
				$this->logger->notice('App: ' . $action->getAppId() . ' is not enabled for the visiting user: ' . $targetUser->getUID());
				return;
			}
		}

		if (array_key_exists($action->getId(), $this->actions)) {
			// Don't register duplicate action
			return;
		}

		$action->preload($targetUser);
		// Add action to associative array of actions with action ID as the key
		$this->actions[$action->getId()] = $action;
	}

	/**
	 * Load user actons
	 */
	private function loadActions(IUser $targetUser, ?IUser $visitingUser): void {
		$allActionQueue = array_merge(IProfileManager::ACCOUNT_PROPERTY_ACTION_QUEUE, $this->appActionQueue);

		foreach ($allActionQueue as $actionClass) {
			try {
				/** @var IAction $action */
				$action = $this->container->get($actionClass);

				// Run checks if the action is an account property action
				if (in_array($actionClass, IProfileManager::ACCOUNT_PROPERTY_ACTION_QUEUE, true)) {
					$account = $this->accountManager->getAccount($targetUser);
					$property = $action->getId();
					$value = $account->getProperty($property)->getValue();

					// Only register action if property is set and visible to visiting user
					if (!empty($value) && $this->isPropertyVisible($targetUser, $visitingUser, $property)) {
						try {
							$this->registerAction($targetUser, $visitingUser, $action);
						} catch (TypeError $e) {
							$this->logger->error(
								"$actionClass is not an IAction instance",
								[
									'exception' => $e,
								]
							);
						}
					}
				} else {
					try {
						$this->registerAction($targetUser, $visitingUser, $action);
					} catch (TypeError $e) {
						$this->logger->error(
							"$actionClass is not an IAction instance",
							[
								'exception' => $e,
							]
						);
					}
				}
			} catch (NotFoundExceptionInterface | ContainerExceptionInterface $e) {
				$this->logger->error(
					"Could not find profile action class: $actionClass",
					[
						'exception' => $e,
					]
				);
			}
		}
	}

	/**
	 * Return an array of registered profile actions for the user
	 *
	 * @return IAction[]
	 */
	private function getActions(IUser $targetUser, ?IUser $visitingUser): array {
		$this->loadActions($targetUser, $visitingUser);

		$actionsClone = $this->actions;
		// Sort associative array into indexed array in ascending order of priority
		usort($actionsClone, function (IAction $a, IAction $b) {
			return $a->getPriority() === $b->getPriority() ? 0 : ($a->getPriority() < $b->getPriority() ? -1 : 1);
		});
		return $actionsClone;
	}

	/**
	 * Return whether the user account property is visible to the visiting user
	 * based on it's scope
	 */
	private function isPropertyVisible(IUser $targetUser, ?IUser $visitingUser, string $property): bool {
		try {
			$account = $this->accountManager->getAccount($targetUser);
			$scope = $account->getProperty($property)->getScope();
			$visibility = $this->getProfileConfig($targetUser, $visitingUser)->getVisibility($property);

			// Handle profile visibility and scope
			switch ($visibility) {
				case ProfileConfig::VISIBILITY_HIDE:
					return false;
				case ProfileConfig::VISIBILITY_SHOW_USERS_ONLY:
					switch ($scope) {
						case IAccountManager::SCOPE_PRIVATE:
							// Private scope - hidden from public (non-logged-in) and from unknown users
							return $visitingUser !== null && $this->knownUserService->isKnownToUser($targetUser->getUID(), $visitingUser->getUID());
						case IAccountManager::SCOPE_LOCAL:
							return $visitingUser !== null;
						case IAccountManager::SCOPE_FEDERATED:
							return $visitingUser !== null;
						case IAccountManager::SCOPE_PUBLISHED:
							return $visitingUser !== null;
						default:
							return false;
					}
				case ProfileConfig::VISIBILITY_SHOW:
					switch ($scope) {
						case IAccountManager::SCOPE_PRIVATE:
							return $visitingUser !== null && $this->knownUserService->isKnownToUser($targetUser->getUID(), $visitingUser->getUID());
						case IAccountManager::SCOPE_LOCAL:
							return true;
						case IAccountManager::SCOPE_FEDERATED:
							return true;
						case IAccountManager::SCOPE_PUBLISHED:
							return true;
						default:
							return false;
					}
				default:
					return false;
			}
		} catch (PropertyDoesNotExistException $e) {
			$this->logger->error($e->getMessage(), ['exception' => $e]);
		}
	}

	/**
	 * @inheritDoc
	 */
	public function getProfileParams(IUser $targetUser, $visitingUser): array {
		$account = $this->accountManager->getAccount($targetUser);
		// Initialize associative array of profile parameters
		$profileParameters = [
			'userId' => $account->getUser()->getUID(),
		];

		// TODO add additional emails
		$additionalEmails = array_map(
			function (IAccountProperty $property) {
				return $property->getValue();
			},
			$account->getPropertyCollection(IAccountManager::COLLECTION_EMAIL)->getProperties(),
		);

		// Add account property parameters
		foreach (IProfileManager::PROFILE_PROPERTIES as $property) {
			$profileParameters[IProfileManager::PROFILE_PROPERTY_MAP[$property]] =
				$this->isPropertyVisible($targetUser, $visitingUser, $property)
				// If empty string explicitly set to null
				? ($account->getProperty($property)->getValue() ?: null)
				: null;
		}

		// Add avatar visibility parameter
		$profileParameters['isUserAvatarVisible'] = $this->isPropertyVisible($targetUser, $visitingUser, IAccountManager::PROPERTY_AVATAR);

		// Add actions paraemer
		$profileParameters['actions'] = array_map(
			function (IAction $action) {
				return [
					'id' => $action->getId(),
					'icon' => $action->getIcon(),
					'title' => $action->getTitle(),
					'label' => $action->getLabel(),
					'target' => $action->getTarget(),
				];
			},
			$this->getActions($targetUser, $visitingUser),
		);

		return $profileParameters;
	}

	/**
	 * @inheritDoc
	 */
	public function getProfileConfig(IUser $targetUser, ?IUser $visitingUser): ProfileConfig {
		try {
			$config = $this->configMapper->get($targetUser->getUID());
		} catch (DoesNotExistException $e) {
			$config = new ProfileConfig();
			$config->setUserId($targetUser->getUID());

			$actionVisibilityMap = [];
			/** @var IAction $action */
			foreach ($this->getActions($targetUser, $visitingUser) as $action) {
				$actionVisibilityMap[$action->getId()] =
					in_array($action->getId(), ProfileConfig::DEFAULT_ACTION_VISIBILITY_MAP, true)
					? ProfileConfig::DEFAULT_ACTION_VISIBILITY_MAP[$action->getId()]
					: ProfileConfig::DEFAULT_VISIBILITY;
			}

			$config->setVisibilityMap(array_merge(ProfileConfig::DEFAULT_PROPERTY_VISIBILITY_MAP, $actionVisibilityMap));
			$this->configMapper->insert($config);
		}

		return $config;
	}
}
