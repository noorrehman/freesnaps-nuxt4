
<template>
  <div class="flex justify-between mt-4 border-t-2 border-[#bebebe] p-4">
    <img src="/images/logo.svg" alt="Logo" class="w-28"/>
    <Socialicons />
  </div>
</template>

<script setup lang="ts">
import Socialicons from "~/components/footer/Socialicons.vue";

const socials = [
  "/images/fb_social.svg",
  "/images/instagram_social.svg",
  "/images/pinterest_social.svg"
]
</script>