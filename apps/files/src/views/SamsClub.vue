
<template>
	<div>
		<button 
			@click="buttonClicked"
			v-if="IsShowButton">
			{{TextName}}
		</button>
		<Modal v-if="IsShowModel" @close="ModelClosed" size="large">
            <SamsClubModel :SpecialProperty="ModelDetail" :Close="ModelClosed"/>			
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
			TextName: 'Sams Clubs',
			IsShowModel: false,
			ModelDetail: 'Club',
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
		async buttonClicked(){
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
			this.updatePlusButton()
			this.updateHint()
			
		},
		async updatePlusButton(){
			if(!OC.isUserAdmin() && this.ModelDetail!==""){
				$('.actions.creatable').find(".button.new").hide()
			}
			else{
				$('.actions.creatable').find(".button.new").show()
			}

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
		}


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
