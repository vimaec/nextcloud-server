<!--
  - @copyright 2019 Roeland Jago Douma <roeland@famdouma.nl>
  -
  - @author 2019 Roeland Jago Douma <roeland@famdouma.nl>
  - @author Hinrich Mahler <nextcloud@mahlerhome.de>
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
  -->

<template>
	<div v-if="false" id="files-sharing-personal-settings" class="section">
		<h2>{{ t('files_sharing', 'Sharing') }}</h2>
		<p v-if="!enforceAcceptShares">
			<input id="files-sharing-personal-settings-accept"
				v-model="accepting"
				class="checkbox"
				type="checkbox"
				@change="toggleEnabled">
			<label for="files-sharing-personal-settings-accept">{{ t('files_sharing', 'Accept user and group shares by default') }}</label>
		</p>
		<p v-if="allowCustomDirectory">
			<SelectShareFolderDialogue />
		</p>
	</div>
</template>

<script>
import { generateUrl } from '@nextcloud/router'
import { loadState } from '@nextcloud/initial-state'
import { showError } from '@nextcloud/dialogs'
import axios from '@nextcloud/axios'

import SelectShareFolderDialogue from './SelectShareFolderDialogue'

export default {
	name: 'PersonalSettings',
	components: {
		SelectShareFolderDialogue,
	},

	data() {
		return {
			// Share acceptance config
			accepting: loadState('files_sharing', 'accept_default'),
			enforceAcceptShares: loadState('files_sharing', 'enforce_accept'),

			// Receiving share folder config
			allowCustomDirectory: loadState('files_sharing', 'allow_custom_share_folder'),
		}
	},

	methods: {
		async toggleEnabled() {
			try {
				await axios.put(generateUrl('/apps/files_sharing/settings/defaultAccept'), {
					accept: this.accepting,
				})
			} catch (error) {
				showError(t('sharing', 'Error while toggling options'))
				console.error(error)
			}
		},
	},
}
</script>

<style scoped lang="scss">
p {
	margin-top: 12px;
	margin-bottom: 12px;
}
</style>
