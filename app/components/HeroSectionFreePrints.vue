<template>
  <div class="bg-[url('/images/home/header_bg.webp')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
    <UContainer class=" text-center flex flex-1 lg:flex-row flex-col-reverse items-center ">
      <div class="lg:w-full">
        <NuxtImg
            class="w-full"
            src="/images/home/header_image_child.webp"
            alt="Child Prints"
        />
      </div>
      <div class="lg:w-full">
        <div class="w-72 lg:w-56 mx-auto mt-14 lg:mt-0">
          <h2 class="text-9xl tracking-[-0.2rem] lg:text-8xl lg:tracking-[0rem] font-bold text-white text-justify after:w-full after:inline-block leading-[32px] lg:leading-[0.3]">
            FREE
          </h2>
          <h2 class="text-[5.3rem] tracking-[-0.05rem] lg:tracking-[0rem] ml-0.5 lg:text-[4rem] font-bold text-white text-justify after:w-full after:inline-block leading-[0.2] lg:leading-[0.2]">
            PRINTS
          </h2>
          <!--          <h2 class="text-[1.6rem] lg:text-[1.2rem] tracking-[0.2rem] lg:tracking-[0.1rem] font-normal text-white text-justify after:w-full after:inline-block leading-[0.4]">-->
          <!--            JUST PAY POSTAGE-->
          <!--          </h2>-->
        </div>
        <div class="mb-6 flex items-center justify-center space-x-2 mt-1 text-base text-[#ef9830]">
          <h4>NO SUBSCRIPTION</h4>
          <span>|</span>
          <h5>EXPRESS DELIVERY</h5>
        </div>
        <div class="mb-6 lg:mb-0">
          <NuxtLink to="/prints" class="active:text-[#d79f4d] hover:text-[#d79f4d] !text-[#d79f4d] text-4xl lg:text-2xl font-bold tracking-[1px] bg-[#312c82] px-8 py-1 rounded">
            ORDER NOW
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const showHowItWorks = ref(false)


</script>