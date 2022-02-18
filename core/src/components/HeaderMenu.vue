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
	<div :id="id"
		v-click-outside="clickOutsideConfig"
		:class="{ 'header-menu--opened': opened }"
		class="header-menu">
		<a ref=""
			class="header-menu__trigger d-none d-md-flex"
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
						<b-nav-item to="/nextcloud/index.php"
							class="text-dark-grey"
							link-classes="text-reset text-18 py-2"
							active>
							Dashboard
						</b-nav-item>
						<b-nav-item to="/nextcloud/index.php/apps/files/" class="text-dark-grey" link-classes="text-reset text-18 py-2">
							All Files
						</b-nav-item>
						<b-nav-item class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Activity
						</b-nav-item>
						<b-nav-item to="/nextcloud/index.php/apps/files/?dir=/&view=favorites" class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Favorites
						</b-nav-item>
						<b-nav-item to="/nextcloud/index.php/apps/files/?dir=/&view=shareoverview" class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Shared
						</b-nav-item>
						<b-nav-item class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Notifocations
						</b-nav-item>
						<b-nav-item to="/nextcloud/index.php/apps/files/?dir=/&view=systemtagsfilter" class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Tags
						</b-nav-item>
					</b-nav>
				</section>
				<section class="mt-auto mb-3">
					<b-nav vertical>
						<b-nav-item class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Archived Files
						</b-nav-item>
						<b-nav-item to="/nextcloud/index.php/settings/apps" class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Apps
						</b-nav-item>
						<b-nav-item to="/nextcloud/index.php/settings/user" class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Settings
						</b-nav-item>
						<b-nav-item to="/nextcloud/index.php/settings/help" class="text-dark-grey" link-classes="text-reset text-18 py-2">
							Help
						</b-nav-item>
						<b-nav-item :to="'/nextcloud/index.php/logout?requesttoken=' + tokenUrl" class="text-dark-grey" link-classes="text-reset text-18 py-2">
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

// import { loadState } from '@nextcloud/initial-state'

// const { userState } = loadState('user_status', 'profileEnabled', false)

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
			opened: this.open,
			clickOutsideConfig: {
				handler: this.closeMenu,
				middleware: this.clickOutsideMiddleware,
			},
			user: getCurrentUser(),
			token: getRequestToken(),
			// userState: userState,
		}
	},
	computed: {
		tokenUrl() {
			return encodeURIComponent(this.token)
		}
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
		opacity: 0.6;
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
		content: " ";
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
}
</style>
