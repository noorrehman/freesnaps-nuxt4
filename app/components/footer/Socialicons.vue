<template>
  <div class="flex items-center space-x-2">
    <NuxtLink v-for="social in socials" :to="social.link">
      <img :key="social.icon" :src="social.icon" alt="Logo" class="w-6"/>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const socials = [
  {
    icon: "/images/fb_social.svg",
    link: "https://www.facebook.com/freesnappers",
  },
  {
    icon: "/images/instagram_social.svg",
    link: "https://www.instagram.com/freesnappers/",
  },
]
</script>