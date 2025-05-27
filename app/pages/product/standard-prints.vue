<template>
  <div class="lg:max-w-7xl mx-auto">
    <div class=" lg:flex lg:mt-6 lg:space-x-0" >
      <div class=" lg:w-1/2 lg:p-2 bg-[#c1c3ff] lg:bg-transparent">
        <img src="/A4.jpg" alt="Print Image" class="w-full h-54 lg:h-80 object-contain" loading="lazy" />
      </div>
      <UContainer class="lg:w-1/2" >
        <div class="px-4">
          <h2 class="text-[22px] mt-4 leading-9 font-normal lg:text-left lg:mt-0 flex products-center justify-between lg:justify-start lg:space-x-4">
            <span>{{ products.name }}</span>
          </h2>
          <p class="text-xl text-[#ff5a5f]">Unlimited Prints with Express Delivery</p>
          <div class="my-1 space-y-0.5 lg:mt-3">
            <img src="/images/trust_pilot_5_star.png" class="w-28 h-6" alt="5 star rating"/>
            <p class="text-xs">Rated <strong class="font-semibold">4.9</strong> out of <strong class="font-semibold">5</strong></p>
          </div>
          <div v-if="products.short_description" class="mt-2 mb-8 lg:mt-4 lg:mb-10 text-sm font-light">
            {{products?.short_description.replace(/<\/?[^>]+(>|$)/g, "")}}
          </div>
          <div v-else-if="products.description" class="mt-2 mb-8 lg:mt-4 lg:mb-10 text-sm font-light">
            {{products.description.replace(/<\/?[^>]+(>|$)/g, "")}}
          </div>
          <div class="mt-2 mb-2 grid grid-cols-5 gap-2">
            <button v-for="variation in products?.variations" :key="variation.id" disabled class="border border-[#c9c9c9] block py-1.5 px-3 text-base rounded">
              {{ variation.attributes[0].option }}
            </button>
          </div>
          <UButton label="UPLOAD PHOTOS" size="xl" class="mt-4 bg-dark-blue hover:bg-gray-800/90 w-full justify-center py-3 font-light " />
        </div>

        <div class="mt-6 px-4 ">
          <AccordianPhotoPrints :products="products" />
          <ShareIcons />
        </div>
      </UContainer>
    </div>
    <PhotoPrints />
  </div>
</template>

<script setup lang="ts">
import ShareIcons from "~/components/ShareIcons.vue";

const products = {
  "id": 58,
  "name": "Standard Prints",
  "slug": "standard-prints",
  "permalink": "https://app.freesnaps.co.uk/product/standard-prints/",
  "type": "variable",
  "status": "publish",
  "featured": false,
  "description": "Standard Print Images on Gloss 260gsm Fuji Paper Elevate your visuals with our vibrant standard print images, expertly produced on premium 260gsm gloss Fuji paper. <br /> Designed for those who appreciate quality and detail, our prints deliver sharp, vivid colors that bring your images to life. The high-gloss finish enhances contrast and depth, making it perfect for photography, art reproductions, and promotional materials. With a weight of 260gsm, this paper is not only sturdy but also offers a luxurious feel that adds a touch of sophistication to any project. <br /> Whether you're displaying cherished memories, showcasing artwork, or creating eye-catching marketing materials, our standard print images on gloss Fuji paper ensure your visuals stand out. Experience the difference in quality and clarity that Fuji paper provides, and make your images unforgettable.",
  "short_description": "Our standard size prints are perfect for album storage, preserving your memories beautifully.",
  "price": "0",
  "regular_price": "",
  "sale_price": "",
  "categories": [
    {
      "id": 34,
      "name": "Prints",
      "slug": "prints"
    }
  ],
  "variations": [
    {
      "id": 12862,
      "description": "",
      "permalink": "https://app.freesnaps.co.uk/product/standard-prints/?attribute_pa_standard=4x3",
      "sku": "",
      "price": "0",
      "sale_price": "",
      "regular_price": "0",
      "status": "publish",
      "image": null,
      "attributes": [
        {
          "id": 1,
          "name": "Standard",
          "slug": "pa_standard",
          "option": "4x3"
        }
      ]
    },
    {
      "id": 12861,
      "description": "",
      "permalink": "https://app.freesnaps.co.uk/product/standard-prints/?attribute_pa_standard=3x2",
      "sku": "",
      "price": "0",
      "sale_price": "",
      "regular_price": "0",
      "status": "publish",
      "image": null,
      "attributes": [
        {
          "id": 1,
          "name": "Standard",
          "slug": "pa_standard",
          "option": "3x2"
        }
      ]
    },
    ]
}

</script>