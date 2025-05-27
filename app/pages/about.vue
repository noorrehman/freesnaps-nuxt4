<template>
  <div >
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
        <h1 class="text-white font-medium text-xl uppercase lg:text-3xl">About Us</h1>
      </div>
    </div>
    <UContainer class=" p-5 font-light ">
      <div class="flex justify-center items-center">
        <video class="w-full" src="https://freesnaps.s3.eu-north-1.amazonaws.com/web/front_web_images/about/freesnaps_about_video_wtxwg5.mp4" autoplay controls playsinline controlslist="nodownload"></video>
      </div>
      <div class="my-4 lg:flex lg:space-x-4">
        <div class="lg:flex-1">
          <p>Thousands of people around the UK use <b>FREESNAPS&nbsp;</b>every year. Our features and integrations allow you to print your precious photos directly from your mobile phone, quick turnaround time and free delivery makes us a market leader. <strong class="font-medium uppercase">Freesnaps</strong> has been around since 2008. The company started slowly in a small town in UK. Now we’re sending photo products far and wide, and we love how quickly we’re growing. We see our website as the heartbeat of our business, creating innovative products that empower our customers to be more creative.</p>
        </div>
        <div class="mt-4 lg:w-1/2">
          <NuxtImg
              src="/about/about-us-2_m1xper.jpg"
              alt="Thousand of People"
              provider="s3Provider"
              loading="lazy" />
        </div>
      </div>
      <div class="my-4">
        <div>
          <h2 class="text-xl uppercase my-4 font-medium">Leadership Team</h2>
          <p><strong class="font-medium uppercase">Freesnaps</strong> senior leadership team draws on decades of experience across industries to chart a course for the future and guide the company towards its strategic goals.</p>
        </div>
      </div>
      <div class="my-4 lg:flex lg:space-x-4">
        <div class="lg:flex-1">
          <h2 class="text-xl uppercase my-4 font-medium">People</h2>
          <p><strong class="font-medium uppercase">Freesnaps</strong> Team is growing quickly to support hundreds of new customers every month. As a privately owned, founder-led company, we’re able to work fast and respond to our customers’ needs without anything getting in our way. We invest in new software and new tech, research, customer support, and great design. We also invest in our employees.</p>
          <p class="mt-2">We’re always looking for smart, creative people to join our team in Northern Ireland. Our employees enjoy the stability of a time-tested and successful product, and the excitement of developing new products and features every month.</p>
        </div>
        <div class="mt-4 lg:w-1/2">
          <NuxtImg
              src="/about/about-us-3_ow5qru.jpg"
              alt="Creative People"
              provider="s3Provider"
              loading="lazy" />
        </div>
      </div>
      <div class="my-4 lg:flex lg:space-x-4 ">
        <div class="lg:flex-1">
          <h2 class="text-xl uppercase my-4 font-medium">Community</h2>
          <p><strong class="font-medium uppercase">Freesnaps</strong> serves the people and organizations in Northern Ireland, this helps make our town better, and more human.</p>
          <p class="mt-2">We support our local photographic clubs and organizations. We help strengthen arts organizations, we even support our local cycle clubs which brings communities together.</p>
          <p class="mt-2">We love UK and want to make sure it’s a place where creativity is celebrated and where great images come to life. <strong class="font-medium uppercase">Freesnaps</strong> has invested heavily in our drive to making us the number one destination for online photo printing, let’s get going.</p>        </div>
        <div class="mt-4 lg:w-1/2 lg:px-10">
          <NuxtImg
              src="/about/about-3_l8c6zf.jpg"
              alt="Community"
              provider="s3Provider"
              loading="lazy" />
        </div>
      </div>
    </UContainer>
  </div >
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About | Freesnaps',
  description: 'Learn more about freesnaps, how we perform and deliver outstanding services.',
})
</script>