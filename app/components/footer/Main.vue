<template>
  <div>
    <div class="bg-[#f7ebeb] py-12">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-xl text-center">Our Customers Love FreeSnaps</h2>
        <p class="text-center text-sm flex justify-center items-center space-x-1"><span>Rated excellent on</span> <img class="h-4" alt="trust pilot" src="/images/trust_pilot_star_with_text.png" /></p>
        <div class="flex items-center justify-center space-x-2 mt-1.5">
          <img class="h-4" alt="5 stars rating" src="/images/trust_pilot_5_star.png" />
        </div>
        <CustomerReviews prevIcon= "i-lucide-chevron-left" nextIcon= 'i-lucide-chevron-right' class="mt-4" />
      </div>
    </div>
    <div class="max-w-7xl mx-auto">
      <div class="p-4">
        <FooterNavigation/>
        <FooterAddress/>
        <FooterPaymentMethods/>
        <p class="text-xs text-blacks font-light text-center my-4">
          You can email us anytime at
          <a class="text-dark-blue font-normal" href="mailto:hello@freesnaps.co.uk">hello@freesnaps.co.uk</a>.</p>
      </div>
      <FooterToolbar/>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>