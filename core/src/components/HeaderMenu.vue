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
		class="header-menu"
	>
		<a
			class="header-menu__trigger"
			href="#"
			:aria-label="ariaLabel"
			:aria-controls="`header-menu-${id}`"
			:aria-expanded="opened"
			aria-haspopup="menu"
			@click.prevent="toggleMenu"
		>
			<slot name="trigger" />
		</a>
		<div class="">
			<div
				v-show="opened || mobile"
				:id="`header-menu-${id}`"
				class="header-menu__wrapper"
				role="menu"
			>
				<div class="header-menu__carret" />
				<div class="header-menu__content" :class="showSearch ? '' : 'd-none d-md-block'">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { directive as ClickOutside } from "v-click-outside";
import excludeClickOutsideClasses from "@nextcloud/vue/dist/Mixins/excludeClickOutsideClasses";

import { getCurrentUser, getRequestToken } from "@nextcloud/auth";
import Avatar from "@nextcloud/vue/dist/Components/Avatar";

export default {
	name: "HeaderMenu",
	components: {
		Avatar
	},
	directives: {
		ClickOutside
	},

	mixins: [excludeClickOutsideClasses],

	props: {
		id: {
			type: String,
			required: true
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		open: {
			type: Boolean,
			default: false
		},
    showSearch: {
			type: Boolean,
		}
	},

	data() {
		return {
			mainPath: window._oc_webroot,
			opened: this.open,
			clickOutsideConfig: {
				handler: this.closeMenu,
				middleware: this.clickOutsideMiddleware
			},
			user: getCurrentUser(),
			token: getRequestToken()
		};
	},
	computed: {
		tokenUrl() {
			return encodeURIComponent(this.token);
		},
		mobile() {
			if (window.innerWidth < 768) {
				return true;
			} else return false;
		}
	},
	watch: {
		open(newVal) {
			this.opened = newVal;
			this.$nextTick(() => {
				if (this.opened) {
					this.openMenu();
				} else {
					this.closeMenu();
				}
			});
			if (this.mobile === true) {
				// this.opened = true
				// this.openMenu()
				this.opened = true;
				this.$emit("open");
				this.$emit("update:open", true);
			}
		}
	},
	mounted() {
		document.addEventListener("keydown", this.onKeyDown);
	},
	beforeDestroy() {
		document.removeEventListener("keydown", this.onKeyDown);
	},

	methods: {
		/**
		 * Toggle the current menu open state
		 */
		toggleMenu() {
			// Toggling current state
			if (!this.opened) {
				this.openMenu();
			} else {
				this.closeMenu();
			}
		},

		/**
		 * Close the current menu
		 */
		closeMenu() {
			if (!this.opened) {
				return;
			}

			this.opened = false;
			this.$emit("close");
			this.$emit("update:open", false);
		},

		/**
		 * Open the current menu
		 */
		openMenu() {
			if (this.opened) {
				return;
			}

			this.opened = true;
			this.$emit("open");
			this.$emit("update:open", true);
		},

		onKeyDown(event) {
			// If opened and escape pressed, close
			if (event.key === "Escape" && this.opened) {
				event.preventDefault();

				/** user cancelled the menu by pressing escape */
				this.$emit("cancel");

				/** we do NOT fire a close event to differentiate cancel and close */
				this.opened = false;
				this.$emit("update:open", false);
			}
		}
	}
};
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
p {
  margin-bottom: 0;
}
.text-18 {
  font-size: 18px;
}
.text-color-dark-gray-cool {
	color: var(--color-dark-gray-cool);
}
#controls .breadcrumb {
	padding: 0;
	margin: 0;
	background-color: transparent;
}
.btn.btn-icon {
	background-color: transparent;
	border: none;
}
.bg-main {
	background-color: var(--c-main);
}
.navbar .btn-toggle.navbar-toggler {
	background-color: transparent;
	border: none;
	color: #fff;
  margin: 0;
}
#appmenu {
	margin-bottom: 0;
}
.sidebar .b-sidebar-body {
	display: flex;
	flex-direction: column;
}
.b-avatar img,
.avatardiv img {
	vertical-align: baseline;
}
@media (max-width: 767px) {
	.sidebar.b-sidebar-outer {
		z-index: 2002;
	}
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
		display: none !important;
	}
	.header-menu .header-menu__trigger,
	#filelist-header #recommendations {
		display: none;
	}
	#app-navigation + #app-content #controls {
		padding-left: 0;
		margin-left: 14px;
		padding-right: 24px;
	}
	#app-content {
		z-index: auto;
	}
	.navbar.bg-mobile {
		position: fixed;
		top: 0;
		z-index: 2001;
	}
	.breadcrumb .crumb>a, .breadcrumb .crumb>a:visited, .breadcrumb .crumb>span {
		font-size: 20px;
		font-weight: 400;
		color: var(--dark-gray-cool);
		padding: 6px 12px;
	}
	#header {
		justify-content: flex-start;
	}
	#header .header-left {
		margin: 0 auto 0 -3rem;
		flex: 0 0 auto;
		order: 1;
	}
	#header .header-right {
		order: 0;
		margin-right: auto;
	}
	#header #header-right,
	#header .header-right {
		background: transparent;
	}
	#header #header-left,
	#header .header-left {
		background-image: none;
	}
	#header .header-right > .notifications {
		position: fixed;
		top: 10px;
		right: 0;
		height: 32px;
    z-index: 2100;
	}
	#header .header-right > .notifications.openedMenu::after {
		top: 20px;
	}
	.header-menu .header-menu__wrapper {
		position: static;
		filter: none;
		left: 0;
		right: auto;
		z-index: 1;
		top: 50px
	}
	.header-menu__carret {
		display: none;
	}
  .nav-link_mobile {
    min-height: 43px;
  }
	.header-menu__wrapper .header-menu__content {
		width: 100vw;
	}
	#app-content-files {
		padding-top: 10px;
	}
	#view-toggle {
    top: 60px;
		right: 8px;
	}
	table th a.columntitle.name, table th a.columntitle.name:visited {
		font-size: 14px;
		font-weight: 500;
		color: var(--color-dark-gray-cool);
		margin-left: 5px;
		text-decoration: none;
	}
	table th a.columntitle.name .icon-triangle-n {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 16 16'%3E%3Cpath fill='%2356585F' d='M14.531 9.497 8.963 4.395c-.535-.481-1.384-.508-1.927-.006L1.469 9.491c-1.354 1.282.519 3.338 1.921 2.096l4.607-4.221 4.613 4.227c1.399 1.239 3.277-.811 1.921-2.096z'/%3E%3C/svg%3E");
		opacity: 1;
		margin-left: 0;
	}
	table th a.columntitle.name .icon-triangle-s {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 16 16'%3E%3Cpath fill='%2356585F' d='m14.531 6.503-5.567 5.102c-.535.481-1.384.508-1.927.006L1.47 6.509c-1.356-1.282.518-3.338 1.92-2.096l4.607 4.221 4.613-4.227c1.399-1.239 3.277.811 1.921 2.096z'/%3E%3C/svg%3E");
		opacity: 1;
		margin-left: 0;
		
	}
	table th {
		border-bottom: none;
	}
	table label {
		margin-bottom: 0;
	}
}
</style>
