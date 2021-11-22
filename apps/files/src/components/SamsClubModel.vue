<template>
    <div class="modal__content">
		<h2>{{Title}}</h2>
		<p>All fields are required</p>
				
		<br/>

        <div class="">
            <label for="">{{NameTitle}}</label>
            <div class="input-group">
                <input 
                    :id="'id_' + NameTitle"
                    v-model="NameValue"
                    aria-disabled="disabled"
				    name="propertyname"
				    type="text"
				    class="customproperty-form-control"
                    >
            </div>
        </div>


        
        <div v-for="pp in knownProperties" class=""
            :key="pp.id"
            :id="'prop' + pp">
            <label :for="'property_'+pp.propertyname">{{ pp.propertylabel }}</label>
            <div class="input-group">
			<input :id="'property_'+pp.propertyname"
				v-model="pp.propertyvalue"
				aria-disabled="disabled"
				:name="pp.propertyname"
				:type="pp.propertytype"
				class="customproperty-form-control">
		    </div>

        </div>

        <br/>

        <div>
            <button @click="Close">Cancel</button>
            <button @click="CreateSC">Create</button>
        </div>
				
	</div>
</template>

<script>

import { generateRemoteUrl, generateUrl } from '@nextcloud/router'
import axios from '@nextcloud/axios'

export default{
    data() {
        return {
            NameValue : '',
            knownProperties:[]
        }
        
    },
    props:{
        Title: String,
        NameTitle: String,
        Close: Function
    },
    async mounted() {
		await this.update()
	},
    methods:{
        async update(){
            this.knownProperties  = await this.retrieveCustomProperties()           
        },
        async retrieveCustomProperties() {
			try {
				const customPropertiesUrl = generateUrl('/apps/customproperties/customproperties')
				const customPropertiesResponse = await axios.get(customPropertiesUrl)
				return customPropertiesResponse.data
			} catch (e) {
				console.error(e)
				return []
			}
		},
        async CreateSC(){

        }
    }
}
</script>


<style scoped>
    .modal__content {
		margin: 10px;
		text-align: left;
	}
</style>