<template>
  <UContainer class=" my-10 px-4 lg:px-0">
    <h2 class="text-lg text-gray-600 lg:text-2xl leading-9 font-medium">
      You may also like these frames
    </h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-4">
      <div class="border rounded" v-for="card in cards" :key="card.id">
        <div class="w-full">
          <NuxtImg :src="card.img" alt="image" class="w-full" densities="x1 x2"/>
        </div>
        <div class="flex items-center px-2 mt-2 space-x-2">
<!--          <UButton  :disabled="true" color="neutral" icon="i-heroicons-check-circle" class="text-green-800 flex-1 text-center flex items-center justify-center">Added to cart</UButton>-->
          <UButton  color="warning" class="flex-1 text-center flex items-center justify-center" >Add to Cart</UButton>
          <UButton icon="i-heroicons-information-circle" class="text-gray-600 bg-white border-[1px] border-gray-300 py-1.5 hover:bg-gray-100" ></UButton>
        </div>
        <div class="space-y-1 mt-2 font-medium">
          <p class="text-xs lg:text-sm text-[#494a4b] text-center items-center">Solid wood Black photo frame</p>
          <p class="text-xs lg:text-sm text-[#494a4b] text-center items-center"> {{ card.text }} </p>
        </div>
        <p class="text-xs lg:text-sm text-gray-600 text-center items-center mt-2"> Ready to hang on your wall </p>
        <p class="text-base lg:text-lg font-semibold text-gray-600 text-center items-center mt-3 mb-4"> £{{card.variation.price}} </p>
      </div>
    </div>
  </UContainer>
<!--  <UModal  >-->
<!--    <div class="p-4">-->
<!--      <div class="font-medium text-center text-blue-900 pb-2 border-b border-blue-800">-->
<!--        <h1 class="text-lg mt-1 font-semibold">Why choose this frame?</h1>-->
<!--      </div>-->
<!--      <div class="mt-4 text-lg leading-6">-->
<!--        Our slim black photo frames are made of solid wood and include an inner mount to securely hold your print. Each frame comes with a clip on the back, making it easy to hang on your wall!-->
<!--      </div>-->
<!--    </div>-->
<!--    <button  class="absolute top-0 right-0 ring-2 ring-black bg-black rounded-full text-white">-->
<!--      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">-->
<!--        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />-->
<!--      </svg>-->
<!--    </button>-->
<!--  </UModal>-->
</template>

<script setup lang="ts">
import frameProduct from '~/data/frame-product.json'


const cards = [
  {
    id: "1",
    link:"/product/instagram-prints",
    img: "/images/think-black-popup.png",
    text: '8x6 Frame mount holds 6x4 print',
    variation: {
      id: 655,
      price: 8.99,
      label: "8x6 mount holds 6x4"
    },
  },
  {
    id: "2",
    link:"/product/large-prints",
    img: "/images/think-black-popup.png",
    text: '10x8 Frame – mount holds 8x6 print',
    variation: {
      id: 654,
      price: 14.99,
      label: "10x8 mount holds 8x6"
    },
  },
  {
    id: "3",
    link:"/product/poster-prints",
    img: "/images/think-black-popup.png",
    text: '12x10 Frame – mount holds 10x8 print',
    variation: {
      id: 652,
      price: 14.99,
      label: "12x10 mount holds 10x8"
    },
  },
  {
    id: "4",
    link:"/product/poster-prints",
    img: "/images/think-black-popup.png",
    text: '16x12 frame – mount holds 12x8 print',
    variation: {
      id: 651,
      price: 19.99,
      label: "16x12 mount holds 12x8"
    }
  }
]
// const showInfo = ref(false)
// const cartStore = useCartStore()
//
// async function addToCart(variation: any) {
//   const lineItem = {} as LineItem
//   lineItem.product_id = frameProduct.id
//   lineItem.variation_id = variation.id
//   lineItem.quantity = 1
//   lineItem.price = parseFloat((variation.price + "" ?? '0'))
//   lineItem.product_name = frameProduct.name
//   lineItem.variation_label = variation.label
//   lineItem.total = lineItem.price * lineItem.quantity
//   await cartStore.addLineItem(lineItem)
// }
//
// function containsVariation(variation_id) {
//   return cartStore.cart.line_items.find(lineItem => lineItem.product_id == frameProduct.id && lineItem.variation_id == variation_id) ?? false
// }


</script>
