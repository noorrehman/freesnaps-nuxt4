<template>
  <UAccordion :items="items" >
    <template #default="{ item }">
      <div class=" uppercase">
        <span class="font-normal lg:text-lg truncate">{{ item.label }}</span>
      </div>
    </template>
    <template #delivery_times>
      <div class="p-2 space-y-2 font-light text-sm">
        <p><span class="font-medium">Standard Shipping:</span> <span>4 to 5 days</span></p>
        <p><span class="font-medium">Express Shipping:</span> <span>1 to 2 days</span></p>
      </div>
    </template>
    <template #product_details="">
      <div  class="p-2 font-light space-y-2">
        <div> {{ product.description }} </div>
      </div>
    </template>
    <template #other_sizes="{ item }">
      <div  class="mb-4 grid grid-cols-5 gap-2 px-2">
        <button v-for="variation in product?.variations" :key="variation.id" disabled class="border border-[#c9c9c9] block py-1.5 px-3 text-base rounded">
          {{ variation.attributes[0].option }}
        </button>
      </div>
    </template>
  </UAccordion>
</template>

<script setup lang="ts">
import type {AccordionItem} from "@nuxt/ui";

const props = defineProps<{
  products: {
      type: Object,
      required: true,
    },
}>()
const product = props.products

const items = ref<AccordionItem[]>([
  {
    label: 'Delivery Times',
    slot: 'delivery_times'
  },
  {
    label: 'Product Details',
    slot: 'product_details'
  },
  {
    label: 'Other Sizes',
    slot: 'other_sizes'
  }
])
</script>