<template>
  <div>
    <div class="lg:flex lg:flex-row-reverse lg:max-h-[650px] relative">
      <NuxtImg

          src="/about/Satya-poster-prints.jpg"
          alt="About Us Image"
          loading="lazy"
          provider="s3Provider"
          sizes="sm:650px md:770px lg:1030px xl:1300px"
          class="flex-1 w-full object-cover h-32 lg:h-96"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h1 class="text-white font-medium text-xl uppercase lg:text-3xl">What do I get for free?</h1>
      </div>
    </div>
    <UContainer class="max-w-5xl p-5 font-light">
      <div class="flex justify-center items-center">
        <video class="w-full" src="https://d3b0axoqanf5po.cloudfront.net/web/front_web_images/how-it-works/how-it-works_tw9oom.mp4" autoplay controls playsinline controlslist="nodownload"></video>
      </div>
      <div class="my-4 ">
        <p>Hi there! So you’re wondering if we really print your photos for free? Well yes, we do! The only cost involved for the customer is getting them securely packaged and safely delivered from our door to yours. Prices start from as little as 8p and most of our customers use the Express Delivery so they will have the photos in their hand within 1 or 2 working days. As well as offering a super-simple, easy-to-use website, we think there’s a few more reasons our service tops others out there.</p>
        <p class="my-4">We have</p>
        <ul class="list-disc pl-8">
          <li>No Subscription</li>
          <li>No limit to the number of prints you can get.</li>
          <li>No print cost ON TOP of postage.</li>
        </ul>
        <p class="my-4">Ready to get started and have your prints ordered in less than 5 minutes?</p>
        <NuxtLink to="/prints" class="bg-primary rounded text-white px-4 py-2 lg:mx-auto">Lets Go!</NuxtLink>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'How it works | Freesnaps',
  description: 'You are amazed and want to understand how we are delivery excellent services in best rates? You can learn all here.',
})
</script>