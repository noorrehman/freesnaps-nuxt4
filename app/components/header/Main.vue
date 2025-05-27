<template>
  <header class="w-full text-dim-gray relative">
    <UContainer class="flex justify-between py-2 items-center px-2 relative">
      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <UButton @click="toggleMenu" size="xl" color="neutral" variant="outline"
            :icon="isMobileMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-16-solid'"/>
      </div>
      <div class="flex items-center space-x-10">
        <HeaderLogo />
        <div class="hidden lg:block">
          <UNavigationMenu :items="items" arrow class="w-full" content-orientation="vertical"
              :ui="{
              link: 'px-3 text-md font-normal text-dim-gray',
              childLink: ' py-1 ',
              childLinkLabel: 'text-md px-0 font-light text-dim-gray',
              childList: 'px-0 ',
              childItem: 'px-1 border-b border-gray-200 pb-1 last:pb-0 last:border-b-0 '
            }"
          />
        </div>
      </div>
      <div>
        <NuxtLink to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 486.569 486.569" style="enable-background:new 0 0 486.569 486.569;" xml:space="preserve" width="24px" height="24px">
            <g>
                <path d="M146.069,320.369h268.1c30.4,0,55.2-24.8,55.2-55.2v-112.8c0-0.1,0-0.3,0-0.4c0-0.3,0-0.5,0-0.8c0-0.2,0-0.4-0.1-0.6   c0-0.2-0.1-0.5-0.1-0.7s-0.1-0.4-0.1-0.6c-0.1-0.2-0.1-0.4-0.2-0.7c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.1-0.4-0.2-0.6   c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.3-0.4-0.4-0.6   c-0.1-0.2-0.2-0.3-0.4-0.5c-0.1-0.2-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.4c-0.2-0.2-0.3-0.3-0.5-0.5   c-0.2-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.1-0.3-0.2-0.5-0.3s-0.4-0.2-0.6-0.4c-0.2-0.1-0.4-0.2-0.6-0.3   s-0.4-0.2-0.6-0.3s-0.4-0.2-0.6-0.3s-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.2-0.7-0.2s-0.4-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.8-0.1   c-0.1,0-0.2-0.1-0.4-0.1l-339.8-46.9v-47.4c0-0.5,0-1-0.1-1.4c0-0.1,0-0.2-0.1-0.4c0-0.3-0.1-0.6-0.1-0.9c-0.1-0.3-0.1-0.5-0.2-0.8   c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.3-0.2-0.6-0.3-0.9c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.1-0.1-0.3-0.2-0.4   c-0.1-0.2-0.2-0.4-0.4-0.6c-0.1-0.2-0.2-0.3-0.3-0.5s-0.2-0.3-0.3-0.5s-0.3-0.4-0.4-0.6c-0.1-0.1-0.2-0.2-0.3-0.3   c-0.2-0.2-0.4-0.4-0.6-0.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.2-0.4-0.4-0.7-0.6c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.4-0.3-0.6-0.5   c-0.3-0.2-0.6-0.4-0.8-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.9-0.4-1.3-0.6l-73.7-31c-6.9-2.9-14.8,0.3-17.7,7.2   s0.3,14.8,7.2,17.7l65.4,27.6v61.2v9.7v74.4v66.5v84c0,28,21,51.2,48.1,54.7c-4.9,8.2-7.8,17.8-7.8,28c0,30.1,24.5,54.5,54.5,54.5   s54.5-24.5,54.5-54.5c0-10-2.7-19.5-7.5-27.5h121.4c-4.8,8.1-7.5,17.5-7.5,27.5c0,30.1,24.5,54.5,54.5,54.5s54.5-24.5,54.5-54.5   s-24.5-54.5-54.5-54.5h-255c-15.6,0-28.2-12.7-28.2-28.2v-36.6C126.069,317.569,135.769,320.369,146.069,320.369z M213.269,431.969   c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S213.269,416.769,213.269,431.969z M428.669,431.969   c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S428.669,416.769,428.669,431.969z M414.169,293.369h-268.1   c-15.6,0-28.2-12.7-28.2-28.2v-66.5v-74.4v-5l324.5,44.7v101.1C442.369,280.769,429.669,293.369,414.169,293.369z" fill="#919197"/>
            </g>
        </svg>
        </NuxtLink>
      </div>
    </UContainer>
    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="lg:hidden px-2 relative">
        <UNavigationMenu :items="items" arrow orientation="vertical" content-orientation="vertical"
                         class="absolute left-0 top-full bg-white shadow-lg z-50 w-full"
            :ui="{
               linkLabel: ' text-base font-normal text-dim-gray',
               list: 'border-y-1 border-stone-300 py-5',
               item: ' py-1 px-4 text-md text-dim-gray ',
               childItem: ' py-0.5 ',
               childLinkLabel: ' text-md px-0 font-light text-dim-gray',
               childList: 'border-l-0  ',
            }" />
      </div>
    </transition>
    <!-- Next Day Shipping Banner -->
    <div class="bg-[#ee9831] h-[40px] flex items-center">
      <div class="max-w-7xl mx-auto px-2 py-2 flex items-center text-white justify-center">
        <p class="text-base font-medium flex items-center space-x-2">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.1em" viewBox="0 0 640 512"><path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"/></svg>
        </span>
          <span>Next Delivery (mon - fri)</span>
        </p>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMenu() {
  isMobileMenuOpen.value = false
}

const items = ref<NavigationMenuItem[]>([
  {
    label: 'PHOTO PRINTS',
    to: '/prints',
    children: [
      { label: 'Standard Prints', to: '/product/standard-prints/', onSelect: closeMenu },
      { label: 'Premium Standards', to: '/product/premium-standard/', onSelect: closeMenu },
      { label: 'Instagram Prints', to: '/product/instagram-prints/', onSelect: closeMenu },
      { label: 'Large Prints', to: '/product/large-prints/', onSelect: closeMenu },
      { label: 'Extra Large Prints', to: '/product/extra-large/', onSelect: closeMenu },
      { label: 'Poster Prints', to: '/product/poster-prints/', onSelect: closeMenu },
      { label: 'Panoramic Prints', to: '/product/panoramic-prints/', onSelect: closeMenu }
    ]
  },
  { label: 'ID PHOTOS', to: '/product/id-photos', onSelect: closeMenu },
  { label: 'FRAMES', to: 'https://freesnapsphototiles.com/photos', onSelect: closeMenu },
  { label: 'PHOTO TILES', to: '/gallery-walls/', onSelect: closeMenu },
  { label: 'COLLAGE', to: 'https://freesnapsphototiles.com/photos/collage', onSelect: closeMenu },
  { label: 'ABOUT', to: '/about', onSelect: closeMenu },
  {
    label: 'MORE',
    children: [
      { label: 'ID Photo', to: '/product/id-photos', onSelect: closeMenu },
      { label: 'Blog', to: '/blog', onSelect: closeMenu },
      { label: 'Success Stories', to: '/success-stories', onSelect: closeMenu },
      { label: 'How it works', to: '/how-it-works', onSelect: closeMenu },
      { label: 'Delivery', to: '/delivery', onSelect: closeMenu },
      { label: 'Contact', to: '/contact', onSelect: closeMenu }
    ]
  }
])
</script>

<style scoped>
.slide-down-enter-active {
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.slide-down-leave-active {
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.slide-down-enter-from {
  transform: scaleY(0);
}

.slide-down-enter-to {
  transform: scaleY(1);
}

.slide-down-leave-from {
  transform: scaleY(1);
}

.slide-down-leave-to {
  transform: scaleY(0);
}

</style>
