
<template>
  <UContainer class=" mt-4">
    <h2 class="text-center text-lg font-semibold">Key Benefits of using Freesnaps</h2>

    <div class="mt-6 max-w-[500px] lg:max-w-full mx-auto">
      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
        <li v-for="benefit in benefits" class="bg-[#fbf6f3] px-3 py-3 rounded flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-x-2">
          <UIcon :name="benefit.icon" class="w-8 h-8 lg:w-12 lg:h-12" />
          <div>
            <h2 class="text-base lg:text-base font-semibold text-center">{{benefit.title}}</h2>
            <h3 v-if="benefit.subtitle" class="text-xs lg:text-base font-normal text-gray-700 text-center mt-1 lg:mt-0">{{benefit.subtitle}}</h3>
          </div>
        </li>
      </ul>
    </div>

  </UContainer>
</template>
<script setup lang="ts">
const benefits = ref([
  {
    bgColor: "",
    icon: "i-heroicons-currency-pound",
    title: "20 free 6x4s each month",
    subtitle: 'That’s 240 free prints per year'
  },
  {
    bgColor: "",
    icon: "i-heroicons-heart",
    title: "High quality archival prints",
    subtitle: "Guaranteed for generations to see"
  },
  {
    bgColor: "",
    icon: "i-heroicons-adjustments-vertical",
    title: "Mix & Match your sizes for best value"
  },
  {
    bgColor: "",
    icon: "i-heroicons-arrow-up-on-square",
    title: "Simple easy photo upload & edit"
  }
])
</script>