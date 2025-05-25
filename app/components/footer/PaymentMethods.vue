

<template>
  <div>
    <p class="text-xs text-dim-gray font-light text-center">We accept these payment methods</p>
    <div class="flex space-x-2 justify-center">
      <img width="32px" sizes="32px" :alt="getAltText(method)" class="max-w-9" v-for="method in methods" :src="method" :key="method" />
    </div>
  </div>
</template>

<script setup lang="ts">
const methods = [
  "/images/visa_method.svg",
  "/images/master_card_method.svg",
  "/images/paypal_method.svg",
  "/images/apple_pay_method.svg",
]

const getAltText = (filePath: string) => {
  const fileName = filePath.substring(filePath.lastIndexOf('/') + 1); // Extract the last part of the file path
  return fileName.replace(/_/g, ' ').replace(/\.\w+$/, ''); // Replace underscores with spaces and remove file extension
}
</script>