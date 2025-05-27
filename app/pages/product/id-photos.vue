<template>
  <UContainer class=" p-5">
    <div class="text-center mb-4 text-base">
      <p class="font-normal">Order your passport photo here</p>
      <p class="text-sm mt-0.5">x1 set of photos <span class="text-[#ff5a5f]">£5.99</span></p>
      <p class="flex items-center space-x-1 text-sm mt-2">
        <!--        <UIcon name="i-heroicons-information-circle" class="h-4 w-4" />-->
        <span>Photos returned to you via royal mail post 24hr turnaround.</span>
      </p>
    </div>
    <div class="flex flex-col items-center">
      <div class="my-4 text-left space-y-2">
        <h2 class="text-xl font-medium text-center">1: Take a Photo.</h2>
        <ul class="list-disc ml-4 space-y-2">
          <li>Have someone take a photo of you in front of a light cream or white wall</li>
          <li>Please No Smiles and no glasses</li>
          <li>Make sure mouth is closed and you are looking straight at the camera.</li>
        </ul>
      </div>
      <h2 class="text-xl font-medium text-center">2. Upload Image</h2>
      <button v-if="!uploadedImage.secure_url" @click="openFilePondDialog" class="mt-4 bg-white shadow-lg border-2 border-dashed border-gray-400 rounded-lg h-48 w-48 flex items-center justify-center">
        <svg v-if="processing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div class="relative mt-4" v-if="uploadedImage.secure_url">
        <img alt="Id Photos" :src="uploadedImage.secure_url" class="object-cover bg-white shadow-lg rounded h-48 w-48 flex items-center justify-center" />
        <button @click="uploadedImage.secure_url = ''" class="absolute top-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>

      </div>
      <ClientOnly>
        <file-pond
            name="file"
            ref="pond"
            class="hidden"
            label-idle=""
            v-bind:allow-multiple="false"
            accepted-file-types="image/*"
            :server="server"
            @addfile="fileAdded"
        />
      </ClientOnly>
      <div class="mt-8">
        <h2 class="text-xl font-medium text-center">3. Select Option</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-3">
          <div v-for="photoType in photoTypes" class="relative">
            <button @click="selectType(photoType)" class="w-full border-2 border-gray-300 px-4 py-2 rounded" :class="{'border-2 border-primary font-medium': selectedType == photoType}">{{photoType}}</button>
          </div>
        </div>
        <div class="mt-2" v-if="selectedType == 'Passport'">
          <h2 class="text-xl font-medium text-center mt-6">3. Select Country</h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-2">
            <div v-for="country in countries" class="relative">
              <button @click="selectedCountry = country" class="w-full border-2 border-gray-300 px-2 py-2 rounded text-xs" :class="{'border-2 border-primary font-medium': selectedCountry == country}">{{country}}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <button v-if="showAddToCart" @click="addToCart" class="w-full px-6 py-2 text-base text-white uppercase leading-6 font-medium bg-primary rounded">
          Add to Cart
        </button>
      </div>
    </div>
  </UContainer>
</template>
<script setup lang="ts">

// import {randomIntFromInterval} from "~/utils"
// import {useCartStore} from "~/stores/cartStore"
// import photoIdProduct from '~/data/photo-id.json'
// import "filepond/dist/filepond.min.css"
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"
// import type {LineItem, UploadObject} from "~/types/cart";
// import vueFilePond from "vue-filepond"
// import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"

// const FilePond = vueFilePond(
//     FilePondPluginFileValidateType
// )
const pond = ref(null)
const folder = ref("")
const uploadedImage = ref({
  public_id: '',
  secure_url: ''
})
const processing = ref(false)
const photoTypes = ref([
  'Passport',
  'Driving licence',
  'Student ID',
  'Blue badge'
])
const selectedType = ref("")
// const cartStore = useCartStore()
const countries = ref([
  'Uk ( 35x45mm )',
  'USA( 2x2 inch )',
  'European Union ( EU )',
  'Ireland',
  'Canada ( 50x70 mm )',
  'India ( visa 2x2 inch )',
  'India passport ( 35x35 mm )',
  'France',
  'Germany',
  'Spain',
  'Australia',
  'China',
  'Russia',
  'New Zealand',
  'Brazil'
])
const selectedCountry = ref("")

const showAddToCart = computed(() => {
  if(uploadedImage.value.secure_url && selectedType.value){
    if(selectedType.value == 'Passport'){
      return !!selectedCountry.value
    }
    return true
  }else{
    return false
  }
})


function openFilePondDialog() {
  pond?.value?.browse()
}

function fileAdded() {
  processing.value = true
}

function selectType(photoType: string){
  if(photoType != 'Passport'){
    selectedCountry.value = ''
  }
  selectedType.value = photoType
}

async function addToCart() {
  const attributeNames: string[] = ['Photo Types']
  const attributeOptions: string[] = [selectedType.value]

  if(selectedCountry.value != ''){
    attributeNames.push("Country")
    attributeOptions.push(selectedCountry.value)
  }

  const variation = getProductVariationId(photoIdProduct, attributeNames, attributeOptions)
  if(variation){
    const lineItem = {} as LineItem
    const totalQuantity = 1

    lineItem.product_id = photoIdProduct.id
    lineItem.variation_id = variation.id
    lineItem.quantity = totalQuantity
    lineItem.price = parseFloat(variation.price)
    lineItem.total = parseFloat(variation.price * totalQuantity)

    lineItem.product_name = photoIdProduct.name
    lineItem.variation_label = ""
    lineItem.variation = variation

    const uploadObject = {} as UploadObject
    uploadObject.user_device = ""
    uploadObject.quantity = totalQuantity
    uploadObject.folder = folder.value
    uploadObject.variation_label = "Photo Id"
    uploadObject.uploadFileList = [
      {
        id: uploadedImage.value.public_id,
        image: uploadedImage.value.secure_url,
        folder: folder.value,
        quantity: 1
      }
    ]
    lineItem.meta_data = [
      {
        key: "csUploader",
        value: uploadObject,
        display_key: "Upload Files",
        display_value: uploadObject.uploadFileList.length + ""
      }
    ]
    await cartStore.addLineItem(lineItem)
    await navigateTo("/cart")
  }

}

const server = {
  url: 'https://api.cloudinary.com/v1_1/freesnaps/image/upload',
  timeout: 70000,
  process: {
    url: '',
    method: 'POST',
    withCredentials: false,
    onload: (response) => {
      const data = JSON.parse(response);
      processing.value = false
      uploadedImage.value = {
        public_id: data.public_id,
        secure_url: data.secure_url
      }
      // currentVariation.value.images.push({
      //   id: data.public_id,
      //   image: data.secure_url,
      //   folder: folder.value,
      //   quantity: 1
      // })
    },
    onerror: (response) => {
      processing.value = false
      console.log(response)
    },
    ondata: (formData) => {
      processing.value = true
      folder.value = "id_photos_" + randomIntFromInterval() + Date.now() + ""
      formData.append("folder", `${folder.value}`)
      formData.append("upload_preset", "freesnaps_upload_preset")
      return formData
    },
  },
  // revert: './revert',
  // restore: './restore/',
  // load: './load/',
  // fetch: './fetch/',
}

const getProductVariationId = (productData: any, attributeNames: string[], attributeOptions: string[]): ProductVariation | null => {
  // Iterate over variations
  for (const variation of productData.variations) {
    // Check if the variation attributes match the desired values
    const matches = attributeNames.every((name, index) => {
      const attribute = variation.attributes.find((attr: any) => attr.name === name);
      return attribute && attribute.option === attributeOptions[index];
    });

    // If all attributes match, return the variation ID
    if (matches) {
      return variation;
    }
  }
  // Return null if no variation matches the specified attributes
  return null;
};

onMounted(() => {

})

</script>