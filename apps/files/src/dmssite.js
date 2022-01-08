import Vue from 'vue'
import DmsSite from './views/DmsSite.vue'
import { translate as t } from '@nextcloud/l10n'
Vue.prototype.t = t

const DmsSiteRoot = document.createElement('div')
DmsSiteRoot.id = 'dms-site'
document.body.appendChild(DmsSiteRoot)

window.addEventListener('DOMContentLoaded', function() {

	// Init vue app
	const View = Vue.extend(DmsSite)
	const AppDmsSite = new View({
		name: 'DmsSite',
	})
	AppDmsSite.$mount('#dms-site')

	$('#app-content-files').on('changeDirectory', AppDmsSite.directoryChanged);
	$('#app-content-files').on('urlChanged', AppDmsSite.directoryChanged);
	window.OCA.Files.retrieveSpecialProp = AppDmsSite.retrieveSpecialProp;

	
})