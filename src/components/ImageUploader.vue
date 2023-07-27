<script>
    import axios from 'axios';
    import api from '../router/api.js'

    export default {
        data() {
            return {
            filePreview: null
            };
        },
        methods: {
            previewFile(event) {
                const file = event.target.files[0];
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.filePreview = e.target.result;
                };

                reader.readAsDataURL(file);
            },
            sendImage(img){

                axios({
                    method: "POST",
                    url: "https://detect.roboflow.com/aicook-lcv4d/3",
                    params: {
                        api_key: "gr34qYsICRPp48qOzPKm"
                    },
                    data: img,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                .then(function(response) {
                    console.log(response.data);
                    const data = response.data.predictions;
                    console.log(data)
                    for(let i = 0; i < data.length ; i++ ){
                        if(data[i].class.includes("_")){
                            data[i].class = data[i].class.replace(/_/g, " ");
                        }
                        api.addIgredient(data[i].class)
                        console.log(data[i].class)
                        //data[i].class;
                    }
                    alert("food items uploaded!")
                })
                .catch(function(error) {
                    console.log(error.message);
                });
            }
        }
    };
</script>

<template>
    <div class="input-grouep mb-3">
        <h3>Image Uploader</h3>
        <hr>
        <div class="container img-container text-center g-0">
            <img v-if="filePreview !== null" :src="filePreview" alt="File Preview" class="shadow img-fluid" />
            <div v-else><i class="fa-solid fa-cloud-arrow-up upload-icon p-4 my-4 shadow rounded"></i></div>
            <div id="testbox"></div>
        </div>
        <div class="custom-file my-3 text-center">
            <input type="file" class="custom-file-input" @change="previewFile" ref="fileInput" />
        </div>
        <div class="container d-flex justify-content-end">
            <button v-if="filePreview !== null" type="submit" class="btn btn-primary" @click="sendImage(filePreview)" >Submit</button>
        </div>
    </div>
</template>
 
<style>
.custom-file-input ~ .custom-file-label::after {
  content: "Browse";
}

.img-preview {
    max-height: auto;
    width: auto;
}

.img-container {
   
}

.upload-icon{
    font-size: 3em;
}


</style>
