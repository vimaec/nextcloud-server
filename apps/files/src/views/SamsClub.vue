
<template>
	<div>
		<Modal v-if="IsShowModel" @close="ModelClosed" size="large">
            <SamsClubModel :SpecialProperty="ModelDetail" :Close="ModelClosed" :Name="ModelName" :Title="Title"/>			
		</Modal>
		
	</div>
	
</template>




<script>
import { getCurrentDirectory, xmlToTagList } from '../utils/davUtils'
import { getCurrentUser } from '@nextcloud/auth'
import Modal from '@nextcloud/vue/dist/Components/Modal'
import SamsClubModel from '../components/SamsClubModel'
import { showError } from '@nextcloud/dialogs'
import { generateRemoteUrl, generateUrl } from '@nextcloud/router'
import axios from '@nextcloud/axios'

export default {
	name: 'SamsClub',

	components: {
		Modal,
        SamsClubModel
	},

	props: {

	},
	data() {
		return {
			IsShowModel: false,
			ModelDetail: 'Club',
			ModelName: null,
			Title:null,
			MenuItems: [],
			AddClubMenuItem: {}			
		}
	},
	computed: {
		IsShowButton(){
			if(this.ModelDetail===''){
				return false
			}
			else{
				return true
			}
		}
	},
	methods: {

		async buttonClicked(name){
			this.ModelName=name
			this.IsShowModel=true					

		},
		async directoryChanged(el){
			this.directoryChangedInternal(el.dir)			
		},
		async ModelClosed(){
			this.IsShowModel=false;

		},
		async retrieveSpecialProp(filepath) {
			try {
				const uid = getCurrentUser().uid
				const path = `/files/${uid}/${filepath}`.replace(/\/+/ig, '/')
				const url = generateRemoteUrl('dav') + path
				const result = await axios.request({
					method: 'PROPFIND',
					url,
					data: '<d:propfind xmlns:d="DAV:"></d:propfind>',
				})

				let specialprop=''

				let values = xmlToTagList(result.data)
				values.forEach(element => {
					if (element.propertyname === 'oc:vimfilecategoryproperty') {
						specialprop = element.propertyvalue

					}
					
				})
				if(specialprop==="Club"){
					this.ModelDetail="Project"
				}
				else{
					this.ModelDetail=""
				}

				
			} catch (e) {
				console.error(e)
				return ''
			}
		},
		async directoryChangedInternal(dir){
			if(dir==="/"){
				this.ModelDetail='Club'
			}
			else{
				await this.retrieveSpecialProp(dir)
			}
			await this.updateHint()
			await this.updateTitle()
			await this.updateNewFileMenu()
			
			
		},
		async updateHint(){
			if(this.ModelDetail=="Club"){
				$("#emptycontent").find("h2").text("No Sites in here")
				$("#emptycontent").find(".uploadmessage").text('select the "SC" button to create your first site')

			}
			else if(this.ModelDetail=="Project"){
				$("#emptycontent").find("h2").text("No Projects in here")
				$("#emptycontent").find(".uploadmessage").text('select the "SC" button to create your first project')
				
			}
			else{
				$("#emptycontent").find("h2").text("No files in here")
				$("#emptycontent").find(".uploadmessage").text("Upload some content or sync with your devices!")
			}
		},
		async updateNewFileMenu(){
			let _this=this
			debugger;
			if(OCA.Files.App.currentFileList._newFileMenu !== undefined){
				OCA.Files.App.currentFileList._newFileMenu.removeMenuEntry('SamsClub-init')
			}
			const templatePlugin =
			{
				id: 'SamsClub-init',
				displayName: t('files', 'Add '+_this.Title),
				templateName: t('files', 'Add Template'+_this.Title),
				iconClass: 'icon-folder',
				fileType: 'file',
				actionHandler(name) {
					_this.buttonClicked(name)
				},
			}
			const initTemplatesPlugin = {
				attach(menu) {
						// register the new menu entry
					menu.addMenuEntry(templatePlugin)
				},
			}
			if(_this.ModelDetail!==""){
				if(OCA.Files.App.currentFileList._newFileMenu !== undefined){
					OCA.Files.App.currentFileList._newFileMenu.addMenuEntry(templatePlugin)
				}
				else{
					OC.Plugins.register('OCA.Files.NewFileMenu', initTemplatesPlugin)
				}

			}
			
			
		},
		async updateTitle(){
			if(this.ModelDetail===""){
				this.Title=""
				return
			}
            let temp = await this.retrieveCustomProperties(this.ModelDetail+'Name')
            this.Title=temp[0].propertylabel


        },
		async retrieveCustomProperties(propertycategory) {
			try {
				const customPropertiesUrl = generateUrl('/apps/customproperties/customproperties?category=' + propertycategory)
				const customPropertiesResponse = await axios.get(customPropertiesUrl)
				return customPropertiesResponse.data
			} catch (e) {
				console.error(e)
				return []
			}
		},



	},

	watch: {
	},

	async mounted() {
		setTimeout(function () { this.directoryChangedInternal(getCurrentDirectory()) }.bind(this), 1000)
		

	},

	async beforeDestroy() {
	},
}
</script>

<style scoped>
	

</style>
