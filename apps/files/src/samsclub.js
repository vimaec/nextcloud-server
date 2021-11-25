import Vue from 'vue'
import SamsClub from './views/SamsClub.vue'
import { translate as t } from '@nextcloud/l10n'
Vue.prototype.t = t


window.addEventListener('DOMContentLoaded', function() {

	// Init vue app
	const View = Vue.extend(SamsClub)
	const AppSamsClub = new View({
		name: 'SamsClub',
	})
	AppSamsClub.$mount('#sams-club')

	$('#app-content-files').on('changeDirectory', AppSamsClub.directoryChanged);
	window.OCA.Files.retrieveSpecialProp = AppSamsClub.retrieveSpecialProp;

	
})