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

namespace OC\Core\Controller;

use function Safe\json_encode;
use OC\Core\Db\ProfileConfigMapper;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSForbiddenException;
use OCP\AppFramework\OCS\OCSNotFoundException;
use OCP\AppFramework\OCSController;
use OCP\IRequest;
use OCP\IUserManager;
use OCP\IUserSession;
use OCP\Profile\IProfileManager;

class ProfileApiController extends OCSController {

	/** @var IProfileManager */
	private $profileManager;

	/** @var ProfileConfigMapper */
	private $configMapper;

	/** @var IUserManager */
	private $userManager;

	/** @var IUserSession */
	private $userSession;

	public function __construct(
		IRequest $request,
		IProfileManager $profileManager,
		ProfileConfigMapper $configMapper,
		IUserManager $userManager,
		IUserSession $userSession
	) {
		parent::__construct('core', $request);
		$this->profileManager = $profileManager;
		$this->configMapper = $configMapper;
		$this->userManager = $userManager;
		$this->userSession = $userSession;
	}

	/**
	 * @UseSession
	 * @NoAdminRequired
	 * @NoSubAdminRequired
	 * @PasswordConfirmationRequired
	 */
	public function setVisibility(string $targetUserId, string $paramId, string $visibility): DataResponse {
		$requestingUser = $this->userSession->getUser();
		$targetUser = $this->userManager->get($targetUserId);

		if (!$this->userManager->userExists($targetUserId)) {
			throw new OCSNotFoundException('User does not exist');
		}

		if ($requestingUser !== $targetUser) {
			throw new OCSForbiddenException('Users can only edit their own visibility settings');
		}

		$config = $this->profileManager->getProfileConfig($targetUser, $requestingUser);
		$visibilityMap = $config->getVisibilityMap();

		if (!in_array($paramId, array_keys($visibilityMap), true)) {
			throw new OCSNotFoundException('User does not have a profile parameter with the ID: ' . $paramId);
		}

		$config->setVisibilityMap(array_merge($visibilityMap, [$paramId => $visibility]));
		$this->configMapper->update($config);

		return new DataResponse();
	}
}
