<template>
	<Avatar id="avatardiv-menu"
			:disable-menu="true"
			:user="user"
			:display-name="displayName"
			:show-user-status="true"
			:preloaded-user-status="status"
			:url="avatar" />
</template>

<script>
import Avatar from '@nextcloud/vue/dist/Components/Avatar'

export default {
	name: 'UserStatusNavbarApp',
	components: {
		Avatar,
	},
	props: {
		user: {
			type: String,
			required: true,
		},
		displayName: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: true,
		},
		status: {
			type: Object,
			required: true,
		},
	},
}
</script>
