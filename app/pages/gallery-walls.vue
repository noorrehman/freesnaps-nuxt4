<template>
  <UContainer class=" p-4">
    <div class="my-5">
      <h2 class="font-medium text-xl">
        Choose Your Photo Tile Size and Layout
      </h2>
      <h3 class="text-base lg:text-lg font-light mt-2">
        Browse through our selection of single and mix tiles layouts, and choose the size and layout that best fits your style and space.
      </h3>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-10 w-full ">
      <div v-for="item in items">
        <nuxt-link :to="item.link">
          <img :src="item.image" :alt="item.title" />
          <p class="text-lg lg:text-xl">{{item.title}}</p>
        </nuxt-link>
      </div>
    </div>

  </UContainer>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Dawn and Jade",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/28A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/28"
  },
  {
    title: "Kent",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/19A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/19"
  },

  {
    title: "16 Beautiful Memories",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/7A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/7"
  },
  {
    title: "Fabulous 4 with Wide Mount",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/10A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/10"
  },
  {
    title: "Buckingham",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/1A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/1"
  },
  {
    title: "12 Classics",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/2A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/2"
  },
  {
    title: "The Beautiful 6",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/3A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/3"
  },
  {
    title: "Cotswold",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/4A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/4"
  },
  {
    title: "Classic Set of 3",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/5A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/5"
  },
  {
    title: "Trio of 3",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/6A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/6"
  },
  {
    title: "20 Fantastic Stories",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/8A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/8"
  },
  {
    title: "Signature collection",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/9A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/9"
  },
  {
    title: "Simply 2",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/11A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/11"
  },
  {
    title: "Feature Wall of 5",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/12A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/12"
  },
  {
    title: "Feature Wall of 8",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/13A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/13"
  },
  {
    title: "Oxfordshire",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/14A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/14"
  },
  {
    title: "Berkshire",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/15A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/15"
  },
  {
    title: "Herefordshire",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/16A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/16"
  },
  {
    title: "Hampshire",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/17A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/17"
  },
  {
    title: "Suffolk",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/18A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/18"
  },
  {
    title: "Cambridgeshire",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/20A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/20"
  },
  {
    title: "Classic 4 Landscape",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/21A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/21"
  },
  {
    title: "Classic 9 Landscape",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/22A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/22"
  },
  {
    title: "Dorset",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/23A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/23"
  },
  {
    title: "Cornwall",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/24A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/24"
  },
  {
    title: "Simply 4 Portrait",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/25A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/25"
  },
  {
    title: "Staffordshire 16",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/26A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/26"
  },
  {
    title: "Devon",
    image: "https://res.cloudinary.com/freesnapsphototiles/image/upload/resources/photos/browse/27A.jpg",
    link: "https://freesnapsphototiles.com/gallery-walls/27"
  }
]

useSeoMeta({
  title: 'Frame Prints | Freesnaps',
  ogTitle: 'Frame Prints | Freesnaps',
  description: 'Grab free prints online and make convert wall into stunning art.',
  ogDescription: 'Grab free prints online and make convert wall into stunning art.',
  ogImage: '/images/logo.svg',
  twitterCard: 'summary_large_image',
})

</script>