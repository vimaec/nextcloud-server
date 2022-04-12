/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { generateFilePath } from '@nextcloud/router'
import { getLoggerBuilder } from '@nextcloud/logger'
import { getRequestToken } from '@nextcloud/auth'
import { translate as t, translatePlural as n } from '@nextcloud/l10n'
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import UnifiedSearch from './views/UnifiedSearch.vue'


// eslint-disable-next-line camelcase
__webpack_nonce__ = btoa(getRequestToken())

// eslint-disable-next-line camelcase
__webpack_public_path__ = generateFilePath('core', '', 'js/')

const logger = getLoggerBuilder()
	.setApp('unified-search')
	.detectUser()
	.build()

Vue.mixin({
	data() {
		return {
			logger,
		}
	},
	methods: {
		t,
		n,
	},
})

Vue.use(BootstrapVue)

const windowSize = window.innerWidth;
const mobileWidth = 767
const currentPage = window.location.href
const filesLayout = currentPage.search('apps/files')
const favoritesLayout = currentPage.search('/&view=favorites')
const shareLayout = currentPage.search('/&view=shareoverview')
const tagsLayout = currentPage.search('/&view=systemtagsfilter')
const archiveLayout = currentPage.search('/&view=trashbin')
console.log(window.location)

var el = '#unified-search'

if (windowSize < mobileWidth && filesLayout > 0 && shareLayout < 0 && favoritesLayout < 0 && tagsLayout < 0 && archiveLayout < 0) {
	el = '#unified-search2'
}
// console.log(el)

export default new Vue({
	el: el,
	// eslint-disable-next-line vue/match-component-file-name
	name: 'UnifiedSearchRoot',
	render: h => h(UnifiedSearch),
})
