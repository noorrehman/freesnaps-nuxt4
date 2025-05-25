<template>

  <div class="container mx-auto py-4 mt-8 px-4">
    <h2 class="lg:text-xl font-semibold text-center">Why Choose Us?</h2>
    <div class="max-w-2xl mx-auto">
      <div class="flex items-center justify-between mt-4 mb-2 font-semibold lg:text-base">
        <h5 class="w-1/3">Features</h5>
        <div class="w-1/3 flex items-center justify-center">
          <Logo />
        </div>
        <h5 class="w-1/3 flex items-center justify-end">Others</h5>
      </div>
      <div class="flex items-center justify-between w-full font-medium lg:text-base bg-[#d8edf2] px-2 lg:px-4 py-1 my-1">
        <h5 class="flex-1">Just Pay Postage</h5>
        <h5 class="w-[22%] lg:w-1/3 flex items-center justify-center"><UIcon name="i-heroicons-check" class="w-6 h-6 text-xl font-bold text-green-500" /></h5>
        <h5 class="w-1/3 flex items-center justify-end"><UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-xl font-bold text-red-500" /></h5>
      </div>
      <div class="flex items-center justify-between w-full font-medium lg:text-base bg-[#d9e3e5] px-2 lg:px-4 py-1 my-1">
        <h5 class="flex-1">Express Shipping</h5>
        <h5 class="w-[22%] lg:w-1/3 flex items-center justify-center"><UIcon name="i-heroicons-check" class="w-6 h-6 text-xl font-bold text-green-500" /></h5>
        <h5 class="w-1/3 flex items-center justify-end"><UIcon name="i-heroicons-check" class="w-6 h-6 text-xl font-bold text-green-500" /></h5>
      </div>
      <div class="flex items-center justify-between w-full font-medium lg:text-base bg-[#d8edf2] px-2 lg:px-4 py-1 my-1">
        <h5 class="flex-1">Quick & Easy Upload</h5>
        <h5 class="w-[22%] lg:w-1/3 flex items-center justify-center"><UIcon name="i-heroicons-check" class="w-6 h-6 text-xl font-bold text-green-500" /></h5>
        <h5 class="w-1/3 flex items-center justify-end"><UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-xl font-bold text-red-500" /></h5>
      </div>
      <div class="flex items-center justify-between w-full font-medium lg:text-base bg-[#d9e3e5] px-2 lg:px-4 py-1 my-1">
        <h5 class="flex-1">High Gloss Prints</h5>
        <h5 class="w-[22%] lg:w-1/3 flex items-center justify-center"><UIcon name="i-heroicons-check" class="w-6 h-6 text-xl font-bold text-green-500" /></h5>
        <h5 class="w-1/3 flex items-center justify-end"><UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-xl font-bold text-red-500" /></h5>
      </div>

      <div>
        <img src="/images/prints/icons.webp" alt="Features icon" class="mx-auto h-14 mt-4" />
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import Logo from "~/components/header/Logo.vue";
</script>
