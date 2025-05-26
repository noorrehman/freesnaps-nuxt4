<template>
  <div class="bg-pink-600 h-[40px] lg:h-[40px] flex items-center">
    <UContainer class=" px-0.5 py-2 lg:py-4 flex items-center text-white justify-center text-center">
      <!--      <p class="text-sm">-->
      <!--        Order within <strong class="font-semibold">{{ formattedCountdown }} minutes</strong> to receive it within 1 to 2 days.-->
      <!--      </p>-->
      <p class="text-sm">
        Order over <strong class="font-bold">£{{discountCouponMinimumAmount}}</strong> get <strong class="font-bold">20%</strong> off - See at checkout
      </p>

    </UContainer>
  </div>
  <div class="bg-pink-600 h-[40px] lg:h-[40px] flex items-center">
    <UContainer class=" px-0.5 py-2 lg:py-4 flex items-center text-white justify-center text-center">
      <p class="text-center font-normal">
        <strong>Offer ends <span class="underline">{{getTomorrowDate()}}</span></strong>
      </p>
    </UContainer>
  </div>

</template>

<script setup lang="ts">
import {discountCouponMinimumAmount} from "~/utils/coupon";
//
// const countDownStore = useCountDownStore();
//
// const startCountdown = () => {
//   requestAnimationFrame(() => {
//     setInterval(() => {
//       if(countDownStore.countdown > 60){
//         countDownStore.countdown--
//       }else{
//         countDownStore.reset()
//       }
//     }, 1000)
//   })
// }
//
// onMounted(() => {
//   startCountdown()
// })
//
// const formattedCountdown = computed(() => {
//   return Math.floor(countDownStore.countdown / 60)
// });

function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // Increment the date by 1

  const day = tomorrow.getDate();
  const month = tomorrow.toLocaleString('en-US', { month: 'long' });

  // Function to get ordinal suffix (st, nd, rd, th)
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th"; // Covers 4-20
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  return `${day}${getOrdinalSuffix(day)} ${month}`;
}
</script>
