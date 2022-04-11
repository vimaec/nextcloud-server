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
	<div class="">
		<b-navbar toggleable="lg" type="dark" variant="mobile">
			<b-navbar-toggle class="px-2 btn-toggle" target="sidebar-1">
				<svg
					width="20"
					aria-hidden="true"
					focusable="false"
					data-prefix="far"
					data-icon="bars"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					class="svg-inline--fa fa-bars fa-w-14"
				>
					<path
						fill="currentColor"
						d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
						class
					/>
				</svg>
			</b-navbar-toggle>
		</b-navbar>
		<b-sidebar
			id="sidebar-1"
			class="sidebar"
			width="82%"
			no-header
			backdrop
			shadow
		>
			<template #default="{ hide }">
				<header class="bg-main pb-4">
					<b-row no-gutters>
						<b-col>
							<b-button
								variant="icon"
								class="mt-1 text-white mb-2"
								size="md"
								@click="hide"
							>
								<svg
									width="16"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 320 512"
								>
									<path
										fill="currentColor"
										d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
										class=""
									/>
								</svg>
							</b-button>
						</b-col>
					</b-row>
					<b-row no-gutters align-v="center">
						<b-col class="flex-shrink-1 flex-grow-0">
							<Avatar
								class="b-avatar ml-4 mr-2 text-white bg-success rounded-circle"
								:size="60"
								:user="user.uid"
								:display-name="user.displayName"
								:show-user-status="false"
								:show-user-status-compact="false"
							/>
						</b-col>
						<b-col class="flex-shrink-0 flex-grow-1">
							<h3
								class="text-white mb-0 text-lg fw-bolder text-capitalize pr-4"
							>
								{{ user.displayName }}
							</h3>
							<!-- <a class="text-white text-decoration-none small" href="mailto:usetheforce@rebellion.com">usetheforce@rebellion.com</a> -->
						</b-col>
					</b-row>
				</header>
				<section class="mb-auto mt-3">
					<b-nav vertical>
						<b-nav-item
							:to="mainPath + '/index.php'"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
							active
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								class="mr-3"
							>
								<path
									d="M12.2 15c-1.546 0-2.8-1.254-2.8-2.8 0-1.546 1.254-2.8 2.8-2.8 1.546 0 2.8 1.254 2.8 2.8S13.746 15 12.2 15zm-8.4 0C2.254 15 1 13.746 1 12.2s1.254-2.8 2.8-2.8 2.8 1.254 2.8 2.8S5.346 15 3.8 15zm8.4-8.4c-1.546 0-2.8-1.254-2.8-2.8 0-1.546 1.254-2.8 2.8-2.8C13.746 1 15 2.254 15 3.8s-1.254 2.8-2.8 2.8zm-8.4 0C2.254 6.6 1 5.346 1 3.8S2.254 1 3.8 1s2.8 1.254 2.8 2.8c0 1.546-1.254 2.8-2.8 2.8z"
									fill="currentColor"
								/>
							</svg>

							Dashboard
						</b-nav-item>
						<b-nav-item
							:to="mainPath + '/index.php/apps/files/'"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								class="mr-3"
							>
								<path
									d="m13.26 3.625-4.03-.009L7.9 2.28c-.272-.254-.628-.399-1-.405H2.745C1.78 1.878 1 2.66 1 3.625v8.75c.004.967.789 1.749 1.756 1.75h10.489c.965.004 1.751-.776 1.755-1.741V5.375c0-.963-.777-1.745-1.74-1.75z"
									fill="currentColor"
								/>
							</svg>
							All Files
						</b-nav-item>
						<b-nav-item
							:to="mainPath + '/index.php/apps/activity/'"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								class="mr-3"
							>
								<path
									d="M10.15 15h-4.3c-2.676-.008-4.843-2.175-4.85-4.851v-4.3C1.009 3.174 3.176 1.008 5.851 1h4.3c2.675.009 4.841 2.176 4.849 4.851v4.3c-.009 2.675-2.175 4.84-4.85 4.849zM5.825 8l1.11 3.5c.088.296.36.499.669.5h.021c.3-.006.564-.2.659-.485l.329-1.209.878-3.217.626 2.074c.09.286.356.48.656.479h1.337c.231.001.446-.12.565-.319a.6634.6634 0 0 0 0-.685.66523.66523 0 0 0-.565-.319h-.794l-1.26-3.844c-.098-.286-.367-.479-.67-.479h-.009c-.302.004-.569.2-.663.487L7.649 8.751c-.008.035-.039.059-.074.061-.035.001-.067-.021-.079-.054l-.908-2.581c-.079-.273-.317-.469-.6-.493-.027-.001-.053-.001-.08 0-.257 0-.494.14-.618.365l-.643 1.209-.565 1.061-.011.022v.005l-.365-.022a.29437.29437 0 0 0-.042 0c-.231.001-.445.122-.565.319-.127.21-.127.474 0 .684.12.197.334.318.565.319h.886c.246 0 .453-.173.693-.578.023-.029.043-.061.06-.094l.524-.968L5.825 8z"
									fill="currentColor"
								/>
							</svg>
							Activity
						</b-nav-item>
						<b-nav-item
							:to="
								mainPath +
									'index.php/apps/files/?dir=/&view=favorites'
							"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								class="mr-3"
							>
								<path
									d="m8.829 1.694 1.753 3.697 3.589.381c.505.049.874.498.825 1.003-.024.246-.146.472-.339.627l-2.866 2.353.885 3.956c.111.495-.2.986-.694 1.097-.232.052-.475.012-.679-.111l-3.309-2.013-3.308 2.012c-.434.263-.999.125-1.263-.309-.123-.203-.163-.446-.111-.677l.885-3.955L1.34 7.402c-.394-.32-.454-.898-.135-1.292.155-.19.379-.311.622-.335l3.588-.381 1.753-3.7c.218-.459.766-.654 1.225-.436.191.091.345.245.436.436z"
									fill="currentColor"
								/>
							</svg>
							Favorites
						</b-nav-item>
						<b-nav-item
							:to="
								mainPath +
									'/index.php/apps/files/?dir=/&view=shareoverview'
							"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 16 16"
								class="mr-3"
							>
								<path
									d="M11.5 15c-1.447-.004-2.619-1.176-2.623-2.624 0-.286.047-.569.14-.84L6.348 9.862c-.49.488-1.153.761-1.845.762-1.447-.004-2.62-1.175-2.626-2.623.004-1.447 1.176-2.62 2.624-2.624.693 0 1.358.275 1.849.766l2.669-1.668c-.095-.273-.144-.561-.144-.851.004-1.448 1.176-2.62 2.624-2.624 1.447.004 2.619 1.176 2.624 2.624-.004 1.448-1.176 2.62-2.624 2.625-.686.001-1.344-.267-1.835-.747L6.988 7.173c.09.268.137.55.137.833 0 .284-.047.566-.139.835l2.672 1.677c.489-.486 1.15-.759 1.84-.76 1.447.005 2.62 1.177 2.625 2.625-.009 1.444-1.179 2.612-2.623 2.617zm0-3.779c-.661.004-1.195.539-1.2 1.2.002.663.537 1.2 1.2 1.205.664-.002 1.203-.54 1.205-1.205-.005-.664-.542-1.199-1.205-1.2zm-7-4.424c-.661.004-1.195.539-1.2 1.2.004.661.539 1.195 1.2 1.2.663-.001 1.201-.537 1.206-1.2-.006-.662-.544-1.195-1.207-1.196l.001-.004zm7-4.371c-.661.004-1.195.539-1.2 1.2.002.663.537 1.2 1.2 1.205.664-.002 1.203-.54 1.205-1.205-.005-.664-.542-1.2-1.205-1.2z"
									fill="currentColor"
								/>
							</svg>
							Shared
						</b-nav-item>
						<b-nav-item
							:to="
								mainPath +
									'/index.php/apps/files/?dir=/&view=systemtagsfilter'
							"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="mr-3">
                <path id="price-tag" d="M-59.389,487.5a2.335,2.335,0,0,1-1.663-.689l-7.259-7.258A2.336,2.336,0,0,1-69,477.89a2.338,2.338,0,0,1,.689-1.664l7.692-7.692a3.511,3.511,0,0,1,2.494-1.035h7.361a1.758,1.758,0,0,1,1.248.517,1.776,1.776,0,0,1,.516,1.25v7.358a3.51,3.51,0,0,1-1.032,2.5l-7.693,7.691A2.335,2.335,0,0,1-59.389,487.5Zm-3.828-11.237a1.058,1.058,0,0,0-.272.036,1.057,1.057,0,0,0-.743.744,1.053,1.053,0,0,0,.273,1.016l4.207,4.213a1.04,1.04,0,0,0,.743.309,1.044,1.044,0,0,0,.743-.309,1.042,1.042,0,0,0,.309-.743,1.042,1.042,0,0,0-.309-.743l-4.207-4.215A1.056,1.056,0,0,0-63.217,476.263Zm10.017-6.317h0a1.574,1.574,0,0,0-1.572,1.566,1.574,1.574,0,0,0,1.565,1.576h.01a1.558,1.558,0,0,0,1.106-.458,1.582,1.582,0,0,0,.463-1.113,1.574,1.574,0,0,0-1.57-1.571Z" transform="translate(69 -467.5)" fill="#56585f"/>
              </svg>
							Tags
						</b-nav-item>
					</b-nav>
				</section>
				<section class="mt-auto mb-3">
					<b-nav vertical>
						<b-nav-item
							:to="
								mainPath +
									'/index.php/apps/files/?dir=/&view=trashbin#'
							"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" class="mr-3">
                <path d="M12.799 15H3.2c-1.212-.002-2.194-.983-2.2-2.194V4.653c-.002-.583.23-1.142.644-1.553l1.697-1.692c.263-.262.619-.409.99-.408h7.338c.371 0 .727.147.99.409L14.356 3.1c.413.411.645.97.644 1.553v8.146c-.001 1.215-.986 2.2-2.201 2.201zM5.134 6.484c-.465 0-.841.377-.841.842.001 2.048 1.661 3.707 3.709 3.706 2.046-.001 3.705-1.66 3.706-3.706 0-.465-.376-.842-.841-.842-.465 0-.842.376-.842.841v.001c-.023 1.118-.948 2.005-2.066 1.982-1.085-.023-1.96-.897-1.982-1.982-.002-.465-.379-.842-.843-.842zm-.301-3.943c-.186 0-.364.076-.494.209l-1.6 1.662h10.362L11.72 2.784c-.131-.154-.323-.243-.525-.243H4.833z" fill="currentColor" />
              </svg>
							Archived Files
						</b-nav-item>
						<b-nav-item
							:to="mainPath + '/index.php/settings/apps'"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								class="mr-3"
							>
								<path
									d="M8 15c-3.864-.004-6.996-3.136-7-7 .004-3.864 3.136-6.996 7-7 1.857-.005 3.64.733 4.95 2.05C14.267 4.36 15.005 6.143 15 8c-.004 3.864-3.136 6.996-7 7zM8 3.2V8l3.51 3.267c.829-.886 1.291-2.054 1.29-3.267v-.006C12.794 5.347 10.647 3.203 8 3.2z"
									fill="currentColor"
								/>
							</svg>
							Apps
						</b-nav-item>
						<b-nav-item
							:to="mainPath + '/index.php/settings/user'"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								class="mr-3"
							>
								<path
									d="M9.121 15H6.878c-.351-.001-.635-.283-.638-.634v-1.11c-.03-.378-.25-.714-.585-.892-.142-.073-.281-.154-.415-.241-.32-.204-.721-.233-1.067-.077l-.993.535c-.31.168-.697.056-.869-.252L1.243 10.39c-.168-.302-.059-.682.242-.85.005-.002.009-.005.013-.007L2.477 9c.32-.2.514-.551.514-.929v-.238c.008-.377-.178-.732-.492-.94l-.756-.432c-.302-.168-.41-.549-.242-.851.002-.004.003-.007.005-.01l1.118-1.92c.179-.303.568-.406.873-.231l.757.427c.153.072.32.11.489.11.206 0 .408-.056.585-.162.1-.064.212-.128.327-.189.335-.176.556-.512.585-.889V1.633c.002-.35.286-.632.636-.633h2.243c.351-.001.637.282.638.633v1.11c.028.379.25.716.586.892.146.078.285.159.411.24.322.203.724.232 1.071.077l.988-.535c.31-.169.698-.057.869.252l1.075 1.941c.168.303.058.685-.245.852-.004.002-.007.004-.011.006L13.516 7c-.318.2-.512.55-.514.926v.24c-.007.377.177.732.49.942l.758.43c.302.167.411.548.244.85-.002.003-.004.007-.006.01l-1.117 1.92c-.179.302-.567.405-.872.23l-.754-.426c-.344-.164-.748-.144-1.075.052-.1.064-.214.127-.326.189-.336.173-.558.509-.585.887v1.114c-.002.351-.287.635-.638.636zM8.033 5.534C6.672 5.524 5.56 6.62 5.55 7.981s1.086 2.473 2.447 2.483h.02c1.361.007 2.471-1.09 2.478-2.451s-1.09-2.471-2.451-2.479h-.011z"
									fill="currentColor"
								/>
							</svg>
							Settings
						</b-nav-item>
						<b-nav-item
							:to="mainPath + '/index.php/settings/help'"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								class="mr-3"
							>
								<path
									d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7c3.864-.004 6.996-3.136 7-7 0-3.866-3.134-7-7-7zm1.096 10.095c-.072.47-.456.854-.926.926-.754.115-1.394-.525-1.279-1.279.072-.47.456-.854.926-.926.755-.116 1.395.525 1.279 1.279zm.441-2.835c-.345.199-.618.357-.618.606 0 .269-.218.487-.487.487h-.876c-.269 0-.487-.218-.487-.487v-.062c.021-.675.44-1.272 1.066-1.524l.434-.248c.328-.197.517-.367.517-.651 0-.436-.558-.766-1.057-.766-.448-.005-.869.212-1.123.58l-.027.033c-.195.238-.543.28-.788.094 0 0-.208-.148-.383-.322-.242-.24-.267-.513-.089-.743.606-.781 1.529-1.261 2.529-1.22.672.01 1.321.25 1.837.68.525.402.84 1.019.858 1.68-.021.828-.536 1.562-1.306 1.863z"
									fill="currentColor"
								/>
							</svg>
							Help
						</b-nav-item>
						<b-nav-item
							:to="
								mainPath +
									'/index.php/logout?requesttoken=' +
									tokenUrl
							"
							class="text-color-dark-gray-cool"
							link-classes="text-reset text-18 py-2 px-4 d-flex align-items-center nav-link_mobile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								class="mr-3"
							>
								<path
									d="M1.821 11.28C.605 8.997.749 6.229 2.194 4.084c.374-.517 1.095-.634 1.612-.261.055.04.106.084.153.133.394.406.446 1.034.125 1.499-1.401 2.161-.784 5.049 1.377 6.45s5.049.784 6.45-1.377c1-1.543 1-3.53 0-5.073-.321-.466-.269-1.093.124-1.499.444-.457 1.175-.468 1.632-.024.048.047.092.098.132.152 2.164 3.202 1.323 7.551-1.879 9.715s-7.551 1.323-9.715-1.879c-.139-.206-.268-.42-.384-.64zm5.352-3.628c-.219-.219-.341-.515-.341-.825V2.165C6.832 1.522 7.354 1 7.998 1s1.165.522 1.165 1.165v4.662c.001.644-.521 1.166-1.164 1.166-.31.001-.607-.122-.826-.341z"
									fill="currentColor"
								/>
							</svg>
							Log Out
						</b-nav-item>
					</b-nav>
				</section>
			</template>
		</b-sidebar>
		<HeaderMenu id="unified-search"
			class="unified-search"
			exclude-click-outside-classes="popover"
			:open.sync="open"
			:aria-label="ariaLabel"
			:show-search="showSearch"
			@open="onOpen"
			@close="onClose">
			<!-- Header icon -->
			<template #trigger>
				<Magnify class="unified-search__trigger"
					:size="20"
					fill-color="var(--color-primary-text)" />
			</template>

			<!-- Search form & filters wrapper -->
			<div class="unified-search__input-wrapper" :class="showSearch ? '' : 'd-none d-block-md'">
				<!-- <h1 class="folder-title d-block d-md-none">{{title}}</h1> -->
				<form class="unified-search__form"
					role="search"
					:class="{'icon-loading-small': isLoading}"
					@submit.prevent.stop="onInputEnter"
					@reset.prevent.stop="onReset">
					<!-- Search input -->
					<!-- <input ref="input"
						v-model="query"
						class="unified-search__form-input"
						type="search"
						:class="{'unified-search__form-input--with-reset': !!query}"
						:placeholder="t('core', 'Search {types} …', { types: typesNames.join(', ') })"
						@input="onInputDebounced"
						@keypress.enter.prevent.stop="onInputEnter"> -->
					<input ref="input"
						v-model="query"
						class="unified-search__form-input"
						type="search"
						:class="{'unified-search__form-input--with-reset': !!query}"
						:placeholder="t('core', 'Search Files, Folders')"
						@input="onInputDebounced"
						@keypress.enter.prevent.stop="onInputEnter">
					<!-- Reset search button -->
					<input v-if="!!query && !isLoading"
						type="reset"
						class="unified-search__form-reset icon-close"
						:aria-label="t('core','Reset search')"
						value="">
				</form>

				<!-- Search filters -->
				<Actions v-if="availableFilters.length > 1" class="unified-search__filters" placement="bottom">
					<ActionButton v-for="type in availableFilters"
						:key="type"
						icon="icon-filter"
						:title="t('core', 'Search for {name} only', { name: typesMap[type] })"
						@click="onClickFilter(`in:${type}`)">
						{{ `in:${type}` }}
					</ActionButton>
				</Actions>
			</div>

			<template v-if="!hasResults">
				<!-- Loading placeholders -->
				<SearchResultPlaceholders v-if="isLoading" />

				<EmptyContent v-else-if="isValidQuery" icon="icon-search">
					<Highlight :text="t('core', 'No results for {query}', { query })" :search="query" />
				</EmptyContent>

				<EmptyContent v-else-if="!isLoading || isShortQuery" icon="icon-search">
					{{ t('core', 'Start typing to search') }}
					<template v-if="isShortQuery" #desc>
						{{ n('core',
							'Please enter {minSearchLength} character or more to search',
							'Please enter {minSearchLength} characters  or more to search',
							minSearchLength,
							{minSearchLength}) }}
					</template>
				</EmptyContent>
			</template>

			<!-- Grouped search results -->
			<template v-else>
				<ul v-for="({list, type}, typesIndex) in orderedResults"
					:key="type"
					class="unified-search__results"
					:class="`unified-search__results-${type}`"
					:aria-label="typesMap[type]">
					<!-- Search results -->
					<li v-for="(result, index) in limitIfAny(list, type)" :key="result.resourceUrl">
						<SearchResult v-bind="result"
							:query="query"
							:focused="focused === 0 && typesIndex === 0 && index === 0"
							@focus="setFocusedIndex" />
					</li>

					<!-- Load more button -->
					<li>
						<SearchResult v-if="!reached[type]"
							class="unified-search__result-more"
							:title="loading[type]
								? t('core', 'Loading more results …')
								: t('core', 'Load more results')"
							:icon-class="loading[type] ? 'icon-loading-small' : ''"
							@click.prevent="loadMore(type)"
							@focus="setFocusedIndex" />
					</li>
				</ul>
			</template>
		</HeaderMenu>
	</div>
</template>

<script>
import { emit } from '@nextcloud/event-bus'
import { minSearchLength, getTypes, search, defaultLimit, regexFilterIn, regexFilterNot } from '../services/UnifiedSearchService'
import { showError } from '@nextcloud/dialogs'

import ActionButton from '@nextcloud/vue/dist/Components/ActionButton'
import Actions from '@nextcloud/vue/dist/Components/Actions'
import debounce from 'debounce'
import EmptyContent from '@nextcloud/vue/dist/Components/EmptyContent'
import Highlight from '@nextcloud/vue/dist/Components/Highlight'
import Magnify from 'vue-material-design-icons/Magnify'

import HeaderMenu from '../components/HeaderMenu'
import SearchResult from '../components/UnifiedSearch/SearchResult'
import SearchResultPlaceholders from '../components/UnifiedSearch/SearchResultPlaceholders'

import { getCurrentUser, getRequestToken } from "@nextcloud/auth";
import Avatar from "@nextcloud/vue/dist/Components/Avatar";

import { basename, dirname, encodePath, isSamePath, joinPaths } from '@nextcloud/paths'
import FileInfo from '../../../apps/files/src/services/FileInfo'

const REQUEST_FAILED = 0
const REQUEST_OK = 1
const REQUEST_CANCELED = 2

export default {
	name: 'UnifiedSearch',

	components: {
		Avatar,
		ActionButton,
		Actions,
		EmptyContent,
		HeaderMenu,
		Highlight,
		Magnify,
		SearchResult,
		SearchResultPlaceholders,
	},

	data() {
		return {
      currentPage: window.location.pathname,
			types: [],

			// Cursors per types
			cursors: {},
			// Various search limits per types
			limits: {},
			// Loading types
			loading: {},
			// Reached search types
			reached: {},
			// Pending cancellable requests
			requests: [],
			// List of all results
			results: {},

			query: '',
			focused: null,

			defaultLimit,
			minSearchLength,

			open: false,

			fileInfo: null,
			mainPath: window._oc_webroot,
			opened: this.open,
			user: getCurrentUser(),
			token: getRequestToken(),
		}
	},

	computed: {
    showSearch() {
      if (this.currentPage.includes('apps/dashboard')) {
        return false
      } else return true
    },
		typesIDs() {
			return this.types.map(type => type.id)
		},
		typesNames() {
			return this.types.map(type => type.name)
		},
		typesMap() {
			return this.types.reduce((prev, curr) => {
				prev[curr.id] = curr.name
				return prev
			}, {})
		},

		ariaLabel() {
			return t('core', 'Search')
		},

		/**
		 * Is there any result to display
		 * @returns {boolean}
		 */
		hasResults() {
			return Object.keys(this.results).length !== 0
		},

		/**
		 * Return ordered results
		 * @returns {Array}
		 */
		orderedResults() {
			return this.typesIDs
				.filter(type => type in this.results)
				.map(type => ({
					type,
					list: this.results[type],
				}))
		},

		/**
		 * Available filters
		 * We only show filters that are available on the results
		 * @returns {string[]}
		 */
		availableFilters() {
			return Object.keys(this.results)
		},

		/**
		 * Applied filters
		 * @returns {string[]}
		 */
		usedFiltersIn() {
			let match
			const filters = []
			while ((match = regexFilterIn.exec(this.query)) !== null) {
				filters.push(match[1])
			}
			return filters
		},

		/**
		 * Applied anti filters
		 * @returns {string[]}
		 */
		usedFiltersNot() {
			let match
			const filters = []
			while ((match = regexFilterNot.exec(this.query)) !== null) {
				filters.push(match[1])
			}
			return filters
		},

		/**
		 * Is the current search too short
		 * @returns {boolean}
		 */
		isShortQuery() {
			return this.query && this.query.trim().length < minSearchLength
		},

		/**
		 * Is the current search valid
		 * @returns {boolean}
		 */
		isValidQuery() {
			return this.query && this.query.trim() !== '' && !this.isShortQuery
		},

		/**
		 * Have we reached the end of all types searches
		 * @returns {boolean}
		 */
		isDoneSearching() {
			return Object.values(this.reached).every(state => state === false)
		},

		/**
		 * Is there any search in progress
		 * @returns {boolean}
		 */
		isLoading() {
			return Object.values(this.loading).some(state => state === true)
		},
		davPath() {
			const user = OC.getCurrentUser().uid
			return OC.linkToRemote(`dav/files/${user}${encodePath(OCA.Files.Sidebar.state.file)}`)
		},
		// title() {
		// 	return OCA.Files.App.currentFileList._currentDirectory
		// }
		// TODO need to be shown on the frontend:
		// TODO current folder
		// TODO all routes
		// Selected file
		// defaultAction() {
		// 	return OCA.Files.Sidebar.state.file
		// },
	},

	async created() {
		this.types = await getTypes()
		this.logger.debug('Unified Search initialized with the following providers', this.types)
		if (OCA.Files.App.currentFileList._currentDirectory === '/') {
			this.title = 'All Files'
		} else this.title = OCA.Files.App.currentFileList._currentDirectory.slice(OCA.Files.App.currentFileList._currentDirectory.lastIndexOf('/') + 1)
		
	},
	async updated() {
		try {
			this.fileInfo = await FileInfo(this.davPath)
			console.log(this.davPath)
			// adding this as fallback because other apps expect it
		} catch (error) {
			console.error(error)
		} finally {
		}
	},
	mounted() {
		document.addEventListener('keydown', (event) => {
			// if not already opened, allows us to trigger default browser on second keydown
			if (event.ctrlKey && event.key === 'f' && !this.open) {
				event.preventDefault()
				this.open = true
				this.focusInput()
			}

			// https://www.w3.org/WAI/GL/wiki/Using_ARIA_menus
			if (this.open) {
				// If arrow down, focus next result
				if (event.key === 'ArrowDown') {
					this.focusNext(event)
				}

				// If arrow up, focus prev result
				if (event.key === 'ArrowUp') {
					this.focusPrev(event)
				}
			}
		})
	},

	methods: {
		async onOpen() {
			this.focusInput()
			// Update types list in the background
			this.types = await getTypes()
		},
		onClose() {
			emit('nextcloud:unified-search.close')
		},

		/**
		 * Reset the search state
		 */
		onReset() {
			emit('nextcloud:unified-search.reset')
			this.logger.debug('Search reset')
			this.query = ''
			this.resetState()
			this.focusInput()
		},
		async resetState() {
			this.cursors = {}
			this.limits = {}
			this.reached = {}
			this.results = {}
			this.focused = null
			await this.cancelPendingRequests()
		},

		/**
		 * Cancel any ongoing searches
		 */
		async cancelPendingRequests() {
			// Cloning so we can keep processing other requests
			const requests = this.requests.slice(0)
			this.requests = []

			// Cancel all pending requests
			await Promise.all(requests.map(cancel => cancel()))
		},

		/**
		 * Focus the search input on next tick
		 */
		focusInput() {
			this.$nextTick(() => {
				this.$refs.input.focus()
				this.$refs.input.select()
			})
		},

		/**
		 * If we have results already, open first one
		 * If not, trigger the search again
		 */
		onInputEnter() {
			if (this.hasResults) {
				const results = this.getResultsList()
				results[0].click()
				return
			}
			this.onInput()
		},

		/**
		 * Start searching on input
		 */
		async onInput() {
			// emit the search query
			emit('nextcloud:unified-search.search', { query: this.query })

			// Do not search if not long enough
			if (this.query.trim() === '' || this.isShortQuery) {
				return
			}

			let types = this.typesIDs
			let query = this.query

			// Filter out types
			if (this.usedFiltersNot.length > 0) {
				types = this.typesIDs.filter(type => this.usedFiltersNot.indexOf(type) === -1)
			}

			// Only use those filters if any and check if they are valid
			if (this.usedFiltersIn.length > 0) {
				types = this.typesIDs.filter(type => this.usedFiltersIn.indexOf(type) > -1)
			}

			// Remove any filters from the query
			query = query.replace(regexFilterIn, '').replace(regexFilterNot, '')

			// Reset search if the query changed
			await this.resetState()
			this.$set(this.loading, 'all', true)
			this.logger.debug(`Searching ${query} in`, types)

			Promise.all(types.map(async type => {
				try {
					// Init cancellable request
					const { request, cancel } = search({ type, query })
					this.requests.push(cancel)

					// Fetch results
					const { data } = await request()

					// Process results
					if (data.ocs.data.entries.length > 0) {
						this.$set(this.results, type, data.ocs.data.entries)
					} else {
						this.$delete(this.results, type)
					}

					// Save cursor if any
					if (data.ocs.data.cursor) {
						this.$set(this.cursors, type, data.ocs.data.cursor)
					} else if (!data.ocs.data.isPaginated) {
					// If no cursor and no pagination, we save the default amount
					// provided by server's initial state `defaultLimit`
						this.$set(this.limits, type, this.defaultLimit)
					}

					// Check if we reached end of pagination
					if (data.ocs.data.entries.length < this.defaultLimit) {
						this.$set(this.reached, type, true)
					}

					// If none already focused, focus the first rendered result
					if (this.focused === null) {
						this.focused = 0
					}
					return REQUEST_OK
				} catch (error) {
					this.$delete(this.results, type)

					// If this is not a cancelled throw
					if (error.response && error.response.status) {
						this.logger.error(`Error searching for ${this.typesMap[type]}`, error)
						showError(this.t('core', 'An error occurred while searching for {type}', { type: this.typesMap[type] }))
						return REQUEST_FAILED
					}
					return REQUEST_CANCELED
				}
			})).then(results => {
				// Do not declare loading finished if the request have been cancelled
				// This means another search was triggered and we're therefore still loading
				if (results.some(result => result === REQUEST_CANCELED)) {
					return
				}
				// We finished all searches
				this.loading = {}
			})
		},
		onInputDebounced: debounce(function(e) {
			this.onInput(e)
		}, 200),

		/**
		 * Load more results for the provided type
		 * @param {String} type type
		 */
		async loadMore(type) {
			// If already loading, ignore
			if (this.loading[type]) {
				return
			}

			if (this.cursors[type]) {
				// Init cancellable request
				const { request, cancel } = search({ type, query: this.query, cursor: this.cursors[type] })
				this.requests.push(cancel)

				// Fetch results
				const { data } = await request()

				// Save cursor if any
				if (data.ocs.data.cursor) {
					this.$set(this.cursors, type, data.ocs.data.cursor)
				}

				// Process results
				if (data.ocs.data.entries.length > 0) {
					this.results[type].push(...data.ocs.data.entries)
				}

				// Check if we reached end of pagination
				if (data.ocs.data.entries.length < this.defaultLimit) {
					this.$set(this.reached, type, true)
				}
			} else

			// If no cursor, we might have all the results already,
			// let's fake pagination and show the next xxx entries
			if (this.limits[type] && this.limits[type] >= 0) {
				this.limits[type] += this.defaultLimit

				// Check if we reached end of pagination
				if (this.limits[type] >= this.results[type].length) {
					this.$set(this.reached, type, true)
				}
			}

			// Focus result after render
			if (this.focused !== null) {
				this.$nextTick(() => {
					this.focusIndex(this.focused)
				})
			}
		},

		/**
		 * Return a subset of the array if the search provider
		 * doesn't supports pagination
		 *
		 * @param {Array} list the results
		 * @param {string} type the type
		 * @returns {Array}
		 */
		limitIfAny(list, type) {
			if (type in this.limits) {
				return list.slice(0, this.limits[type])
			}
			return list
		},

		getResultsList() {
			return this.$el.querySelectorAll('.unified-search__results .unified-search__result')
		},

		/**
		 * Focus the first result if any
		 * @param {Event} event the keydown event
		 */
		focusFirst(event) {
			const results = this.getResultsList()
			if (results && results.length > 0) {
				if (event) {
					event.preventDefault()
				}
				this.focused = 0
				this.focusIndex(this.focused)
			}
		},

		/**
		 * Focus the next result if any
		 * @param {Event} event the keydown event
		 */
		focusNext(event) {
			if (this.focused === null) {
				this.focusFirst(event)
				return
			}

			const results = this.getResultsList()
			// If we're not focusing the last, focus the next one
			if (results && results.length > 0 && this.focused + 1 < results.length) {
				event.preventDefault()
				this.focused++
				this.focusIndex(this.focused)
			}
		},

		/**
		 * Focus the previous result if any
		 * @param {Event} event the keydown event
		 */
		focusPrev(event) {
			if (this.focused === null) {
				this.focusFirst(event)
				return
			}

			const results = this.getResultsList()
			// If we're not focusing the first, focus the previous one
			if (results && results.length > 0 && this.focused > 0) {
				event.preventDefault()
				this.focused--
				this.focusIndex(this.focused)
			}

		},

		/**
		 * Focus the specified result index if it exists
		 * @param {number} index the result index
		 */
		focusIndex(index) {
			const results = this.getResultsList()
			if (results && results[index]) {
				results[index].focus()
			}
		},

		/**
		 * Set the current focused element based on the target
		 * @param {Event} event the focus event
		 */
		setFocusedIndex(event) {
			const entry = event.target
			const results = this.getResultsList()
			const index = [...results].findIndex(search => search === entry)
			if (index > -1) {
				// let's not use focusIndex as the entry is already focused
				this.focused = index
			}
		},

		onClickFilter(filter) {
			this.query = `${this.query} ${filter}`
				.replace(/ {2}/g, ' ')
				.trim()
			this.onInput()
		},
		titleFormated(title) {
			return title.slice(title.lastIndexOf('/') + 1)
		}
	},
}
</script>

<style lang="scss" scoped>
$margin: 10px;
$input-height: 34px;
$input-padding: 6px;

.unified-search {
	&__trigger {
		width: 20px;
		height: 20px;
	}

	&__input-wrapper {
		position: sticky;
		// above search results
		z-index: 2;
		top: 0;
		display: inline-flex;
		align-items: center;
		width: 100%;
		background-color: var(--color-main-background);
	}

	&__filters {
		margin: $margin / 2 $margin;
		ul {
			display: inline-flex;
			justify-content: space-between;
		}
	}

	&__form {
		position: relative;
		width: 100%;
		margin: $margin;

		// Loading spinner
		&::after {
			right: $input-padding;
			left: auto;
		}

		&-input,
		&-reset {
			margin: $input-padding / 2;
		}

		&-input {
			width: 100%;
			height: $input-height;
			padding: $input-padding;

			&,
			&[placeholder],
			&::placeholder {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			// Hide webkit clear search
			&::-webkit-search-decoration,
			&::-webkit-search-cancel-button,
			&::-webkit-search-results-button,
			&::-webkit-search-results-decoration {
				-webkit-appearance: none;
			}

			// Ellipsis earlier if reset button is here
			.icon-loading-small &,
			&--with-reset {
				padding-right: $input-height;
			}
		}

		&-reset {
			position: absolute;
			top: 0;
			right: 0;
			width: $input-height - $input-padding;
			height: $input-height - $input-padding;
			padding: 0;
			opacity: .5;
			border: none;
			background-color: transparent;
			margin-right: 0;

			&:hover,
			&:focus,
			&:active {
				opacity: 1;
			}
		}
	}

	&__filters {
		margin-right: $margin / 2;
	}

	&__results {
		&::before {
			display: block;
			margin: $margin;
			margin-left: $margin + $input-padding;
			content: attr(aria-label);
			color: var(--color-primary-element);
		}
	}

	.unified-search__result-more::v-deep {
		color: var(--color-text-maxcontrast);
	}

	.empty-content {
		margin: 10vh 0;

		::v-deep .empty-content__title {
			font-weight: normal;
            font-size: var(--default-font-size);
			padding: 0 15px;
			text-align: center;
		}
	}
}

</style>

<style scoped>
@media (max-width: 767px) {
  .unified-search__form {
    margin: 10px 24px;
  }
	.unified-search__input-wrapper {
		flex-wrap: wrap;
	}
	.folder-title {
		font-size: 20px;
		font-weight: 500;
		color: var(--dark-gray-cool);
		margin: 16px 24px;
	}
	.header-menu__content .unified-search__form-input, .header-menu__content .unified-search__form-input:active {
		font-size: 16px;
		background-color: var(--c-light-gray);
		height: 48px!important;
		margin: 0;
		border-radius: 10px;
		padding: 6px 12px;
		-webkit-appearance: none!important;
	}
	.empty-content {
		display: none;
	}
	.header-menu__content .unified-search__form-reset {
		top: 7px
	}
	.unified-search__result {
		color: var(--color-main-text);
		display: flex;
		align-items: center;

	}
	.unified-search__result .unified-search__result-line-one > span strong {
		color: var(--dark-gray-cool);
	}
	.unified-search__results:last-child {
		box-shadow: 0 9px 5px 0px rgb(0 0 0 / 50%);
	}
}
</style>