 <!--
  - @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
  -
  - @author John Molakvoæ <skjnldsv@protonmail.com>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program.  If not, see <http://www.gnu.org/licenses/>.
  -
  -->
<template>
	<div
		:id="id"
		v-click-outside="clickOutsideConfig"
		:class="{ 'header-menu--opened': opened }"
		class="header-menu">
		<a class="header-menu__trigger"
			href="#"
			:aria-label="ariaLabel"
			:aria-controls="`header-menu-${id}`"
			:aria-expanded="opened"
			aria-haspopup="menu"
			@click.prevent="toggleMenu">
			<slot name="trigger" />
		</a>
		<div class="d-none d-md-flex">
			<div v-show="opened"
				:id="`header-menu-${id}`"
				class="header-menu__wrapper"
				role="menu">
				<div class="header-menu__carret" />
				<div class="header-menu__content">
					<slot />
				</div>
			</div>
		</div>
		<b-navbar toggleable="lg" type="dark" variant="mobile">
			<b-navbar-toggle class="px-2 btn-toggle" target="sidebar-1">
				<svg width="20"
					aria-hidden="true"
					focusable="false"
					data-prefix="far"
					data-icon="bars"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					class="svg-inline--fa fa-bars fa-w-14">
					<path fill="currentColor"
						d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
						class />
				</svg>
			</b-navbar-toggle>
		</b-navbar>
		<b-sidebar id="sidebar-1"
			class="sidebar"
			width="82%"
			no-header
			backdrop
			shadow>
			<template #default="{ hide }">
				<header class="bg-main pb-3">
					<b-row no-gutters>
						<b-col>
							<b-button variant="icon"
								class="mt-1 text-white mb-2"
								size="md"
								@click="hide">
								<svg width="16"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 320 512">
									<path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class="" />
								</svg>
							</b-button>
						</b-col>
					</b-row>
					<b-row no-gutters align-v="center">
						<b-col class="flex-shrink-1 flex-grow-0">
							<Avatar class="b-avatar mx-2 text-white bg-success rounded-circle"
								:size="60"
								:user="user.uid"
								:display-name="user.displayName"
								:show-user-status="false"
								:show-user-status-compact="false" />
						</b-col>
						<b-col class="flex-shrink-0 flex-grow-1">
							<h3 class="text-white mb-0 text-lg fw-bolder text-capitalize">
								{{ user.displayName }}
							</h3>
							<!-- <a class="text-white text-decoration-none small" href="mailto:usetheforce@rebellion.com">usetheforce@rebellion.com</a> -->
						</b-col>
					</b-row>
				</header>
				<section class="mb-auto mt-3">
					<b-nav vertical>
						<b-nav-item :to="mainPath + '/index.php'"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 d-flex align-items-center"
							active>
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="M12.2 15c-1.546 0-2.8-1.254-2.8-2.8 0-1.546 1.254-2.8 2.8-2.8 1.546 0 2.8 1.254 2.8 2.8S13.746 15 12.2 15zm-8.4 0C2.254 15 1 13.746 1 12.2s1.254-2.8 2.8-2.8 2.8 1.254 2.8 2.8S5.346 15 3.8 15zm8.4-8.4c-1.546 0-2.8-1.254-2.8-2.8 0-1.546 1.254-2.8 2.8-2.8C13.746 1 15 2.254 15 3.8s-1.254 2.8-2.8 2.8zm-8.4 0C2.254 6.6 1 5.346 1 3.8S2.254 1 3.8 1s2.8 1.254 2.8 2.8c0 1.546-1.254 2.8-2.8 2.8z" fill="currentColor" />
							</svg>

							Dashboard
						</b-nav-item>
						<b-nav-item :to="mainPath + '/index.php/apps/files/'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="m13.26 3.625-4.03-.009L7.9 2.28c-.272-.254-.628-.399-1-.405H2.745C1.78 1.878 1 2.66 1 3.625v8.75c.004.967.789 1.749 1.756 1.75h10.489c.965.004 1.751-.776 1.755-1.741V5.375c0-.963-.777-1.745-1.74-1.75z" fill="currentColor" />
							</svg>
							All Files
						</b-nav-item>
						<b-nav-item :to="mainPath + '/index.php/apps/activity/'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="M10.15 15h-4.3c-2.676-.008-4.843-2.175-4.85-4.851v-4.3C1.009 3.174 3.176 1.008 5.851 1h4.3c2.675.009 4.841 2.176 4.849 4.851v4.3c-.009 2.675-2.175 4.84-4.85 4.849zM5.825 8l1.11 3.5c.088.296.36.499.669.5h.021c.3-.006.564-.2.659-.485l.329-1.209.878-3.217.626 2.074c.09.286.356.48.656.479h1.337c.231.001.446-.12.565-.319a.6634.6634 0 0 0 0-.685.66523.66523 0 0 0-.565-.319h-.794l-1.26-3.844c-.098-.286-.367-.479-.67-.479h-.009c-.302.004-.569.2-.663.487L7.649 8.751c-.008.035-.039.059-.074.061-.035.001-.067-.021-.079-.054l-.908-2.581c-.079-.273-.317-.469-.6-.493-.027-.001-.053-.001-.08 0-.257 0-.494.14-.618.365l-.643 1.209-.565 1.061-.011.022v.005l-.365-.022a.29437.29437 0 0 0-.042 0c-.231.001-.445.122-.565.319-.127.21-.127.474 0 .684.12.197.334.318.565.319h.886c.246 0 .453-.173.693-.578.023-.029.043-.061.06-.094l.524-.968L5.825 8z" fill="currentColor" />
							</svg>
							Activity
						</b-nav-item>
						<b-nav-item :to="mainPath + 'index.php/apps/files/?dir=/&view=favorites'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="m8.829 1.694 1.753 3.697 3.589.381c.505.049.874.498.825 1.003-.024.246-.146.472-.339.627l-2.866 2.353.885 3.956c.111.495-.2.986-.694 1.097-.232.052-.475.012-.679-.111l-3.309-2.013-3.308 2.012c-.434.263-.999.125-1.263-.309-.123-.203-.163-.446-.111-.677l.885-3.955L1.34 7.402c-.394-.32-.454-.898-.135-1.292.155-.19.379-.311.622-.335l3.588-.381 1.753-3.7c.218-.459.766-.654 1.225-.436.191.091.345.245.436.436z" fill="currentColor" />
							</svg>
							Favorites
						</b-nav-item>
						<b-nav-item :to="mainPath + '/index.php/apps/files/?dir=/&view=shareoverview'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="M11.5 15c-1.447-.004-2.619-1.176-2.623-2.624 0-.286.047-.569.14-.84L6.348 9.862c-.49.488-1.153.761-1.845.762-1.447-.004-2.62-1.175-2.626-2.623.004-1.447 1.176-2.62 2.624-2.624.693 0 1.358.275 1.849.766l2.669-1.668c-.095-.273-.144-.561-.144-.851.004-1.448 1.176-2.62 2.624-2.624 1.447.004 2.619 1.176 2.624 2.624-.004 1.448-1.176 2.62-2.624 2.625-.686.001-1.344-.267-1.835-.747L6.988 7.173c.09.268.137.55.137.833 0 .284-.047.566-.139.835l2.672 1.677c.489-.486 1.15-.759 1.84-.76 1.447.005 2.62 1.177 2.625 2.625-.009 1.444-1.179 2.612-2.623 2.617zm0-3.779c-.661.004-1.195.539-1.2 1.2.002.663.537 1.2 1.2 1.205.664-.002 1.203-.54 1.205-1.205-.005-.664-.542-1.199-1.205-1.2zm-7-4.424c-.661.004-1.195.539-1.2 1.2.004.661.539 1.195 1.2 1.2.663-.001 1.201-.537 1.206-1.2-.006-.662-.544-1.195-1.207-1.196l.001-.004zm7-4.371c-.661.004-1.195.539-1.2 1.2.002.663.537 1.2 1.2 1.205.664-.002 1.203-.54 1.205-1.205-.005-.664-.542-1.2-1.205-1.2z" fill="currentColor" />
							</svg>
							Shared
						</b-nav-item>
						<b-nav-item :to="mainPath + '/index.php/apps/files/?dir=/&view=systemtagsfilter'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 512 512"
								class="mr-2">
								<path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" fill="currentColor" />
							</svg>
							Tags
						</b-nav-item>
					</b-nav>
				</section>
				<section class="mt-auto mb-3">
					<b-nav vertical>
						<b-nav-item :to="mainPath + '/index.php/apps/files/?dir=/&view=trashbin#'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="M12.799 15H3.2c-1.212-.002-2.194-.983-2.2-2.194V4.653c-.002-.583.23-1.142.644-1.553l1.697-1.692c.263-.262.619-.409.99-.408h7.338c.371 0 .727.147.99.409L14.356 3.1c.413.411.645.97.644 1.553v8.146c-.001 1.215-.986 2.2-2.201 2.201zM4.833 2.541c-.186 0-.364.076-.494.209l-1.6 1.662h10.362L11.72 2.784c-.131-.154-.323-.243-.525-.243H4.833z" fill="currentColor" />
							</svg>
							Archived Files
						</b-nav-item>
						<b-nav-item :to="mainPath + '/index.php/settings/apps'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="M8 15c-3.864-.004-6.996-3.136-7-7 .004-3.864 3.136-6.996 7-7 1.857-.005 3.64.733 4.95 2.05C14.267 4.36 15.005 6.143 15 8c-.004 3.864-3.136 6.996-7 7zM8 3.2V8l3.51 3.267c.829-.886 1.291-2.054 1.29-3.267v-.006C12.794 5.347 10.647 3.203 8 3.2z" fill="currentColor" />
							</svg>
							Apps
						</b-nav-item>
						<b-nav-item :to="mainPath + '/index.php/settings/user'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="M9.121 15H6.878c-.351-.001-.635-.283-.638-.634v-1.11c-.03-.378-.25-.714-.585-.892-.142-.073-.281-.154-.415-.241-.32-.204-.721-.233-1.067-.077l-.993.535c-.31.168-.697.056-.869-.252L1.243 10.39c-.168-.302-.059-.682.242-.85.005-.002.009-.005.013-.007L2.477 9c.32-.2.514-.551.514-.929v-.238c.008-.377-.178-.732-.492-.94l-.756-.432c-.302-.168-.41-.549-.242-.851.002-.004.003-.007.005-.01l1.118-1.92c.179-.303.568-.406.873-.231l.757.427c.153.072.32.11.489.11.206 0 .408-.056.585-.162.1-.064.212-.128.327-.189.335-.176.556-.512.585-.889V1.633c.002-.35.286-.632.636-.633h2.243c.351-.001.637.282.638.633v1.11c.028.379.25.716.586.892.146.078.285.159.411.24.322.203.724.232 1.071.077l.988-.535c.31-.169.698-.057.869.252l1.075 1.941c.168.303.058.685-.245.852-.004.002-.007.004-.011.006L13.516 7c-.318.2-.512.55-.514.926v.24c-.007.377.177.732.49.942l.758.43c.302.167.411.548.244.85-.002.003-.004.007-.006.01l-1.117 1.92c-.179.302-.567.405-.872.23l-.754-.426c-.344-.164-.748-.144-1.075.052-.1.064-.214.127-.326.189-.336.173-.558.509-.585.887v1.114c-.002.351-.287.635-.638.636zM8.033 5.534C6.672 5.524 5.56 6.62 5.55 7.981s1.086 2.473 2.447 2.483h.02c1.361.007 2.471-1.09 2.478-2.451s-1.09-2.471-2.451-2.479h-.011z" fill="currentColor" />
							</svg>
							Settings
						</b-nav-item>
						<b-nav-item :to="mainPath + '/index.php/settings/help'" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7c3.864-.004 6.996-3.136 7-7 0-3.866-3.134-7-7-7zm1.096 10.095c-.072.47-.456.854-.926.926-.754.115-1.394-.525-1.279-1.279.072-.47.456-.854.926-.926.755-.116 1.395.525 1.279 1.279zm.441-2.835c-.345.199-.618.357-.618.606 0 .269-.218.487-.487.487h-.876c-.269 0-.487-.218-.487-.487v-.062c.021-.675.44-1.272 1.066-1.524l.434-.248c.328-.197.517-.367.517-.651 0-.436-.558-.766-1.057-.766-.448-.005-.869.212-1.123.58l-.027.033c-.195.238-.543.28-.788.094 0 0-.208-.148-.383-.322-.242-.24-.267-.513-.089-.743.606-.781 1.529-1.261 2.529-1.22.672.01 1.321.25 1.837.68.525.402.84 1.019.858 1.68-.021.828-.536 1.562-1.306 1.863z" fill="currentColor" />
							</svg>
							Help
						</b-nav-item>
						<b-nav-item :to="mainPath + '/index.php/logout?requesttoken=' + tokenUrl" class="text-color-dark-gray-cool" link-classes="text-reset text-18 py-2 d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-2">
								<path d="M1.821 11.28C.605 8.997.749 6.229 2.194 4.084c.374-.517 1.095-.634 1.612-.261.055.04.106.084.153.133.394.406.446 1.034.125 1.499-1.401 2.161-.784 5.049 1.377 6.45s5.049.784 6.45-1.377c1-1.543 1-3.53 0-5.073-.321-.466-.269-1.093.124-1.499.444-.457 1.175-.468 1.632-.024.048.047.092.098.132.152 2.164 3.202 1.323 7.551-1.879 9.715s-7.551 1.323-9.715-1.879c-.139-.206-.268-.42-.384-.64zm5.352-3.628c-.219-.219-.341-.515-.341-.825V2.165C6.832 1.522 7.354 1 7.998 1s1.165.522 1.165 1.165v4.662c.001.644-.521 1.166-1.164 1.166-.31.001-.607-.122-.826-.341z" fill="currentColor" />
							</svg>
							Log Out
						</b-nav-item>
					</b-nav>
				</section>
			</template>
		</b-sidebar>
	</div>
</template>

<script>
import { directive as ClickOutside } from 'v-click-outside'
import excludeClickOutsideClasses from '@nextcloud/vue/dist/Mixins/excludeClickOutsideClasses'

import { getCurrentUser, getRequestToken } from '@nextcloud/auth'
import Avatar from '@nextcloud/vue/dist/Components/Avatar'

export default {
	name: 'HeaderMenu',
	components: {
		Avatar,
	},
	directives: {
		ClickOutside,
	},

	mixins: [
		excludeClickOutsideClasses,
	],

	props: {
		id: {
			type: String,
			required: true,
		},
		ariaLabel: {
			type: String,
			default: '',
		},
		open: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			mainPath: window._oc_webroot,
			opened: this.open,
			clickOutsideConfig: {
				handler: this.closeMenu,
				middleware: this.clickOutsideMiddleware,
			},
			user: getCurrentUser(),
			token: getRequestToken(),
		}
	},
	computed: {
		tokenUrl() {
			return encodeURIComponent(this.token)
		},
	},
	watch: {
		open(newVal) {
			this.opened = newVal
			this.$nextTick(() => {
				if (this.opened) {
					this.openMenu()
				} else {
					this.closeMenu()
				}
			})
		},
	},
	mounted() {
		document.addEventListener('keydown', this.onKeyDown)
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.onKeyDown)
	},

	methods: {
		/**
		 * Toggle the current menu open state
		 */
		toggleMenu() {
			// Toggling current state
			if (!this.opened) {
				this.openMenu()
			} else {
				this.closeMenu()
			}
		},

		/**
		 * Close the current menu
		 */
		closeMenu() {
			if (!this.opened) {
				return
			}

			this.opened = false
			this.$emit('close')
			this.$emit('update:open', false)
		},

		/**
		 * Open the current menu
		 */
		openMenu() {
			if (this.opened) {
				return
			}

			this.opened = true
			this.$emit('open')
			this.$emit('update:open', true)
		},

		onKeyDown(event) {
			// If opened and escape pressed, close
			if (event.key === 'Escape' && this.opened) {
				event.preventDefault()

				/** user cancelled the menu by pressing escape */
				this.$emit('cancel')

				/** we do NOT fire a close event to differentiate cancel and close */
				this.opened = false
				this.$emit('update:open', false)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.notifications:not(:empty) ~ #unified-search {
	order: -1;
	.header-menu__carret {
		right: 175px;
	}
}
.header-menu {
	&__trigger {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 100%;
		margin: 0;
		padding: 0;
		cursor: pointer;
		opacity: .6;
	}

	&--opened &__trigger,
	&__trigger:hover,
	&__trigger:focus,
	&__trigger:active {
		opacity: 1;
	}

	&__wrapper {
		position: fixed;
		z-index: 2000;
		top: 50px;
		right: 0;
		box-sizing: border-box;
		margin: 0;
		border-radius: 0 0 var(--border-radius) var(--border-radius);
		background-color: var(--color-main-background);

		filter: drop-shadow(0 1px 5px var(--color-box-shadow));
	}

	&__carret {
		position: absolute;
		right: 128px;
		bottom: 100%;
		width: 0;
		height: 0;
		content: ' ';
		pointer-events: none;
		border: 10px solid transparent;
		border-bottom-color: var(--color-main-background);
	}

	&__content {
		overflow: auto;
		width: 350px;
		max-width: 100vw;
		min-height: calc(44px * 1.5);
		max-height: calc(100vh - 50px * 2);
	}
}

</style>

<style>
.text-color-dark-gray-cool {
	color: var(--color-dark-gray-cool);
}
#controls .breadcrumb  {
	padding: 0;
	margin: 0;
	background-color: transparent;
}
.btn.btn-icon {
	background-color: transparent;
	border: none;
}
.bg-main {
  background-image: linear-gradient(0deg, var(--c-main-dark) 0%, var(--c-main) 100%);;
}
.navbar .btn-toggle.navbar-toggler {
	background-color: transparent;
	border: none;
	color: #fff;
}
#appmenu {
	margin-bottom: 0;
}
.sidebar .b-sidebar-body {
  display: flex;
  flex-direction: column;
}
.b-avatar img, .avatardiv img {
	vertical-align: baseline;
}
@media (max-width: 767px) {
	#appmenu {
		display: none;
	}
	#contactsmenu {
		display: none;
	}
	#settings {
		display: none;
	}
	#app-navigation-toggle {
		display: none!important;
	}
	.header-menu .header-menu__trigger {
		display: none;
	}
	#app-navigation+#app-content #controls {
		padding-left: 0;
	}
	#header {
		justify-content: flex-start;
	}
	#header .header-left {
		margin: 0 auto 0 -3rem;
		flex: 0 0 auto;
		order: 1
	}
	#header .header-right {
		order: 0;
		margin-right: auto;
	}
	#header #header-right, #header .header-right {
		background: transparent;
	}
	#header #header-left, #header .header-left {
		background-image: none;
	}
	#header .header-right > .notifications {
		position: fixed;
		top: 14px;
		right: 0;
		height: 32px;
	}
	#header .header-right>.notifications.openedMenu::after {
		top: 18px;
	}
}
</style>
