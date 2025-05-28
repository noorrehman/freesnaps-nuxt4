<template>
  <UCarousel
      v-slot="{ item }"
      arrows loop
      :autoplay="{ delay: 3000 }"
      :items="items"
      :ui="{ item: 'basis-full ',container: 'transition-[width]', controls: '',  }"
      class="w-full lg:max-w-3xl mx-auto items-center justify-between"
      :next="{ variant: 'solid'}"
      :prev="{ variant: 'solid'}"
      :prev-icon="prevIcon"
      :next-icon="nextIcon"

  >
    <div class="flex flex-1 w-full px-14 lg:px-8  items-center justify-center">
      <div>
        <p class="text-sm font-light">{{item.review}}</p>
        <p class="mt-1"><em class="text-xs">-{{item.name}}</em></p>
      </div>
    </div>
  </UCarousel>
</template>

<script setup lang="ts">
defineProps<{
  prevIcon?: string
  nextIcon?: string
}>()

const items = [
  {
    name: "Beena Kelly",
    review: "The service and quality is amazing..arrive on time I honestly can't fault them ..Will be ordering more ",
  },
  {
    name: "Farzila Allarakha",
    review: "I love freesnaps and will forever continue to use them - their photos are good quality, delivery is swift and it’s at a decent price where I don’t feel like I’m being robbed!\n" +
        "Can’t wait to purchase more items and I totally recommend them!",
  },
  {
    name: "Nicola",
    review: "Easy to download your pictures on the website, and you don't have to wait long for them to arrive.",
  },
  {
    name: "Julie Wilson",
    review: "Super easy to order, good quality photo’s and delivery on time",
  },
  {
    name: "Jarad Bryan",
    review: "Great quality pictures.. Through my letter box the next day.. Cannot fault",
  }
]

</script>