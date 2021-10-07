<!--
	- @copyright 2021 Christopher Ng <chrng8@gmail.com>
	-
	- @author Christopher Ng <chrng8@gmail.com>
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
	- MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	- GNU Affero General Public License for more details.
	-
	- You should have received a copy of the GNU Affero General Public License
	- along with this program. If not, see <http://www.gnu.org/licenses/>.
	-
-->

<template>
	<div class="checkbox-container">
		<input
			:id="inputId"
			class="checkbox"
			type="checkbox"
			:checked="isVisible"
			@change="onVisibilityChange">
		<label :for="inputId">
			{{ t('settings', `Show {displayId} on my profile`, { displayId }) }}
		</label>
	</div>
</template>

<script>
import { showError } from '@nextcloud/dialogs'

import { saveProfileParameterVisibility } from '../../../service/ProfileService'
import { validateBoolean } from '../../../utils/validate'

export default {
	name: 'VisibilityCheckbox',

	props: {
		paramId: {
			type: String,
			required: true,
		},
		displayId: {
			type: String,
			required: true,
		},
		isVisible: {
			type: Boolean,
			required: true,
		},
	},

	data() {
		return {
			initialIsVisible: this.isVisible,
		}
	},

	computed: {
		inputId() {
			return `profile-visibility-${this.paramId}`
		},
	},

	methods: {
		async onVisibilityChange(e) {
			const isVisible = e.target.checked
			this.$emit('update:is-visible', isVisible)

			if (validateBoolean(isVisible)) {
				await this.updateVisibility(isVisible)
			}
		},

		async updateVisibility(isVisible) {
			try {
				const responseData = await saveProfileParameterVisibility(this.paramId, isVisible)
				this.handleResponse({
					isVisible,
					status: responseData.ocs?.meta?.status,
				})
			} catch (e) {
				this.handleResponse({
					errorMessage: t('settings', 'Unable to update visibility of {displayId}', { displayId: this.displayId }),
					error: e,
				})
			}
		},

		handleResponse({ isVisible, status, errorMessage, error }) {
			if (status === 'ok') {
				// Ensure that local state reflects server state
				this.initialIsVisible = isVisible
			} else {
				showError(errorMessage)
				this.logger.error(errorMessage, error)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
</style>
