<template>
  <div :class="`${textColor} ${bgColor} py-4 border-t border-gray-200`">
    <div class="max-w-7xl mx-auto flex items-center justify-around space-x-4 lg:text-base">
      <div class="text-center">
        <UIcon name="i-heroicons-face-smile" class="text-3xl lg:text-4xl" />
        <h5><strong>Over 100’000</strong></h5>
        <h6 :class="highlightColor">Happy Customers</h6>
      </div>
      <div class="text-center">
        <UIcon name="i-heroicons-shopping-bag" class="text-3xl lg:text-4xl" />
        <h5><strong>Over 1 Million</strong></h5>
        <h6 :class="highlightColor">Orders Shipped</h6>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  bgColor?: string
  textColor?: string
  highlightColor?: string
}>()

const bgColor = computed(() => props.bgColor || 'bg-[#3f4aa0]')
const textColor = computed(() => props.textColor || 'text-white')
const highlightColor = computed(() => props.highlightColor || 'text-yellow-300')
</script>
