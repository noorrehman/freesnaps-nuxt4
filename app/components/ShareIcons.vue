
<template>
  <div class="flex items-center space-x-2 my-2 lg:my-4 justify-center lg:justify-start">
    <div>
      <strong class="font-semibold">Share:</strong>
    </div>
    <div class="flex items-center space-x-2 lg:space-x-4">
      <img
          :src="`/icons/share/share.svg`"
          class="w-7 cursor-pointer"
          alt="Share"
          @click="copyToClipboard('https://freesnaps.co.uk')"
      />
      <a v-for="icon in icons" :href="icon.link">
        <img
            :src="`/icons/share/${icon.icon}`"
            class="w-7 cursor-pointer"
            :alt="icon.icon"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast()
const icons = [
  {
    icon: 'facebook.svg',
    link: 'https://www.facebook.com/freesnappers',
  },
  {
    icon: 'instagram.svg',
    link: 'https://www.instagram.com/freesnappers/',
  }
]

const copyToClipboard = (link: string) => {
  navigator.clipboard.writeText(link)
      .then(() => {
        alert("Copied!")
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
}
</script>