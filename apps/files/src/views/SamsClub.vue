
<template>
	<div>
		<button 
			@click="buttonClicked"
			v-if="IsShowButton">
			{{TextName}}
		</button>
		<Modal v-if="IsShowAddClub" @close="addClubModelClosed" size="large" title="Add Club">
            <SamsClubModel Title="Add Club" NameTitle="Club Name" SpecialProperty="Club" :Close="addClubModelClosed"/>
			
		</Modal>

		<Modal v-if="IsShowAddProject" @close="addProjectModelClosed" size="large" title="Add Project">
			<SamsClubModel Title="Add Project" NameTitle="Project Name" SpecialProperty="Project" :Close="addClubModelClosed"/>
		</Modal>
		
	</div>
	
</template>




<script>
import { getCurrentDirectory } from '../utils/davUtils'
import Modal from '@nextcloud/vue/dist/Components/Modal'
import SamsClubModel from '../components/SamsClubModel'
import { showError } from '@nextcloud/dialogs'

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
			IsShowButton: false,
			IsShowAddClub: false,
			IsShowAddProject: false
		}
	},

	computed: {
	},
	methods: {
		buttonClicked: function(){
			this.IsShowAddClub=true;

		},
		directoryChanged: function(el){
			if(el.dir==="/"){
				this.IsShowButton=true
			}
			else{
				this.IsShowButton=false
			}

		},
		addClubModelClosed: function(){
			this.IsShowAddClub=false;

		},
		addProjectModelClosed: function(){

		}

	},

	watch: {
	},

	async mounted() {
		if(getCurrentDirectory()==="/"){
			this.IsShowButton=true
		}

	},

	async beforeDestroy() {
	},
}
</script>

<style scoped>
	

</style>
