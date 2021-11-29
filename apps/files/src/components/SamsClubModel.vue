<template>
    <div class="modal__content">
		<h2>{{Title}}</h2>
        <p class="warning" v-if="ShowWarning">{{WarningText}}</p>
				
		<br/>

        <div class="">
            <label for="">{{NameTitle}}<span style="color:red">*</span></label>
            <div class="input-group">
                <input 
                    :id="'id_' + NameTitle"
                    v-model="NameValue"
                    aria-disabled="disabled"
				    name="propertyname"
				    type="text"
                    required
				    class="customproperty-form-control"
                    >
            </div>
        </div>


        
        <div v-for="pp in knownProperties" class=""
            :key="pp.id"
            :id="'prop' + pp">
            <label :for="'property_'+pp.propertyname">{{ pp.propertylabel }} <span v-if="pp.propertyisrequired" style="color:red">*</span></label>
            <div v-if="pp.propertytype ==='textarea'" class="input-group">
			<textarea :id="'textproperty_'+pp.propertyname"
				v-model="pp.propertyvalue"
				:name="pp.propertyname"
                rows="6"
                :required="pp.propertyisrequired"
				class="customproperty-form-control"></textarea>
		    </div>
            <div v-else class="input-group">
			<input :id="'property_'+pp.propertyname"
				v-model="pp.propertyvalue"
				aria-disabled="disabled"
				:name="pp.propertyname"
				:type="pp.propertytype"
                :required="pp.propertyisrequired"
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
import { getCurrentDirectory } from '../utils/davUtils'
import { getCurrentUser } from '@nextcloud/auth'
export default{
    data() {
        return {
            NameValue : '',
            ShowWarning: false,
            WarningText:'',
            knownProperties:[]
        }
        
    },
    props:{
        Title: String,
        NameTitle: String,
        Close: Function,
        SpecialProperty: String
    },
    async mounted() {
		await this.update()
        this.ShowWarning=false
	},
    methods:{
        async update(){
            this.knownProperties  = await this.retrieveCustomProperties()           
        },
        async retrieveCustomProperties() {
			try {
				const customPropertiesUrl = generateUrl('/apps/customproperties/customproperties?category=' + this.SpecialProperty)
				const customPropertiesResponse = await axios.get(customPropertiesUrl)
				return customPropertiesResponse.data
			} catch (e) {
				console.error(e)
				return []
			}
		},
        async CreateSC(){

            var validate=true;
            this.knownProperties.forEach(element => {
                if((element.propertyvalue===null || element.propertyvalue===undefined || element.propertyvalue==="") && element.propertyisrequired){
                    validate=false
                }
            });

            if(!validate || this.NameValue===''){
                this.WarningText="Please fill all required fields"
                this.ShowWarning=true
                return;
            }
            if(OCA.Files.App.currentFileList.findFileEl(this.NameValue).exists()){
                this.WarningText="File Already Exists"
                this.ShowWarning=true
                return;

            }
            var prom= OCA.Files.App.currentFileList.createDirectory(this.NameValue)
            var _this= this
            prom.done(function(){
                _this.knownProperties.forEach(element => {
                    _this.updateProperty(element)             
                });

                let specialproperty = {
                    prefix : 'oc',
                    propertyname : 'vimfilecategoryproperty',
                    propertyvalue : _this.SpecialProperty
                }
                _this.updateProperty(specialproperty)
                _this.Close()


            })

            

            

        },
        async updateProperty(property) {
			const uid = getCurrentUser().uid
			const path = `/files/${uid}/${getCurrentDirectory()}/${this.NameValue}`.replace(/\/+/ig, '/')
			const url = generateRemoteUrl('dav') + path
			const propTag = `${property.prefix}:${property.propertyname}`
			try {
				await axios.request({
					method: 'PROPPATCH',
					url,
					data: `
            <d:propertyupdate xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">
             <d:set>
               <d:prop>
                <${propTag}>${property.propertyvalue}</${propTag}>
               </d:prop>
             </d:set>
            </d:propertyupdate>`,
				})
			} catch (e) {
				console.error(e)
			}
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