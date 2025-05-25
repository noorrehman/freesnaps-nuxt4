<template>
  <div class="mt-4 mb-8">
    <div class="lg:hidden">
      <UNavigationMenu orientation="vertical"  arrow :items="items" class="w-full"
                       :ui="{ link: 'text-lg font-normal text-stone-700', childLinkLabel: 'text-md font-normal text-stone-700' }"

      />
    </div>

    <div class="hidden lg:flex lg:justify-between lg:text-center">
      <div>
        <h3 class="font-light text-lg truncate">Prints</h3>
        <ul class="space-y-3 mt-4">
          <li v-for="print in prints">
            <NuxtLink class="text-sm text-dim-gray font-extralight" :to="print.link">{{ print.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-light text-lg truncate">Photo Tiles</h3>
        <ul class="space-y-3 mt-4">
          <li v-for="photoTile in photoTiles">
            <NuxtLink target="_blank" class="text-sm text-dim-gray font-extralight" :to="photoTile.link">
              {{ photoTile.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-light text-lg truncate">Popular Prints</h3>
        <ul class="space-y-3 mt-4">
          <li v-for="print in popularPrints">
            <NuxtLink class="text-sm text-dim-gray font-extralight" :to="print.link">{{ print.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-light text-lg truncate">More</h3>
        <ul class="space-y-3 mt-4">
          <li v-for="moreLink in moreLinks">
            <NuxtLink class="text-sm text-dim-gray font-extralight" :to="moreLink.link">{{ moreLink.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Prints',
    children: [
      { label: 'Standard Prints', to: '/product/standard-prints' },
      { label: 'Vintage Square', to: '/product/instagram-prints' },
      { label: 'Large Prints', to: '/product/large-prints' },
      { label: 'Poster Prints', to: '/product/poster-prints' },
    ],
  },
  {
    label: 'Photo Tiles',
    children: [
      { label: 'Frames', to: 'https://freesnapsphototiles.com/photos' },
      { label: 'Photo Tiles', to: 'https://freesnaps.co.uk/gallery-walls/' },
      { label: 'Collage', to: 'https://freesnapsphototiles.com/photos/collage' },
      { label: 'Website', to: 'https://freesnapsphototiles.com/' },
    ],
  },
  {
    label: 'Popular Prints',
    children: [
      { label: '6x4 Print', to: '/product/standard-prints/?attribute_pa_standard=6x4' },
      { label: '4x4 Print', to: '/product/instagram-prints/?attribute_pa_instagram=4x4' },
      { label: '4x3 Print', to: '/product/standard-prints/?attribute_pa_standard=4x3' },
      { label: '10x18 Print', to: '/product/large-prints/?attribute_pa_large=10x8' },
    ],
  },
  {
    label: 'More',
    children: [
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Refund Policy', to: '/refund-policy' },
      { label: 'Terms & Conditions', to: '/terms-and-conditions' },
    ],
  },
])

const prints = [
  {
    title: "Standard Prints",
    link: "/product/standard-prints"
  },
  {
    title: "Vintage Square",
    link: "/product/instagram-prints"
  },
  {
    title: "Large Prints",
    link: "/product/large-prints"
  },
  {
    title: "Poster Prints",
    link: "/product/poster-prints"
  },
]
const photoTiles = [
  {
    title: "Frames",
    link: "https://freesnapsphototiles.com/photos"
  },
  {
    title: "Photo Tiles",
    link: "https://freesnaps.co.uk/gallery-walls/"
  },
  {
    title: "Collage",
    link: "https://freesnapsphototiles.com/photos/collage"
  },
  {
    title: "Website",
    link: "https://freesnapsphototiles.com/"
  },
]

const popularPrints = [
  {
    title: "6x4 Print",
    link: "/product/standard-prints/?attribute_pa_standard=6x4"
  },
  {
    title: "4x4 Print",
    link: "/product/instagram-prints/?attribute_pa_instagram=4x4"
  },
  {
    title: "4x3 Print",
    link: "/product/standard-prints/?attribute_pa_standard=4x3"
  },
  {
    title: "10x18 Print",
    link: "/product/large-prints/?attribute_pa_large=10x8"
  },
]

const moreLinks = [
  {
    title: "Contact",
    link: "/contact"
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy"
  },
  {
    title: "Refund Policy",
    link: "/refund-policy"
  },
  {
    title: "Terms & Conditions",
    link: "/terms-and-conditions"
  },
]
</script>

