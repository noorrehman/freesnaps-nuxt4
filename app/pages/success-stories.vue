<template>
  <div>
    <div class="lg:flex lg:flex-row-reverse lg:max-h-[650px] relative">

      <NuxtImg
          src="/about/success-story.jpg"
          alt="About Us Image"
          loading="lazy"
          provider="s3Provider"
          sizes="sm:650px md:770px lg:1030px xl:1300px"
          class="flex-1 w-full object-cover h-32 lg:h-96"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h1 class="text-white font-medium text-xl uppercase lg:text-3xl">Success Stories</h1>
      </div>
    </div>
    <!--    Success Stories-->
    <UContainer class="p-5  grid grid-cols-1 md:grid-cols-2 justify-center mt-10 text-lg font-medium text-white ">

      <div class="flex flex-col  p-4" :class="story.bgColor" v-for="(story, index) in successStories" :key="index"  >
        <UIcon name="i-ri-double-quotes-l" class="size-12"/>
        <h2 class="my-6 ">{{story.storyText}}</h2>
        <div class="flex flex-col mt-4 space-y-1 ">
          <div class="bg-white w-8 h-1"></div>
          <p class="text-md font-semibold text-white">{{story.authorName}}</p>
        </div>
      </div>
      <!--      -->
    </UContainer>

  </div>
</template>

<script setup>
const successStories = [
  {
    bgColor : "bg-green-500/85",
    storyText : "1. Emma’s Wedding Memories Emma and Jake were planning their dream wedding but were on a tight budget. They discovered Freesnaps and were thrilled to find a service that allowed them to create stunning wedding albums without breaking the bank. After their big day, they used Freesnaps to compile their beautiful photos into a custom album. The high-quality prints captured every moment perfectly, and now, whenever they flip through the pages, they relive their special day. Friends and family were so impressed that they started using Freesnaps for their own events!",
    authorName : "Emma’s Story"
  },
  {
    bgColor : "bg-blue-500/80",
    storyText : "2. Tom’s Photography Hobby Tom had always been passionate about photography but never had the opportunity to showcase his work. After joining a local photography group, he learned about Freesnaps and decided to create a portfolio of his best shots. He used their high-quality prints to produce a stunning collection, which he presented at an art fair. The response was overwhelming, and he received several inquiries about selling his prints. Thanks to Freesnaps, Tom’s photography hobby turned into a budding side business.",
    authorName : "Tom’s Story"
  },
  {
    bgColor : "bg-yellow-500/80",
    storyText: "3. Maya’s Art Exhibition Maya, an aspiring artist, was preparing for her first solo exhibition. She needed to print her artwork in a way that would do it justice. After researching various printing services, she chose Freesnaps for their excellent reputation and quality. The vibrant colors and sharp details of her prints amazed her, and the exhibition was a resounding success. Attendees admired her work and many pieces sold within the first hour. Freesnaps helped Maya gain recognition in the local art community.",
    authorName: "Maya’s Story"
  },
  {
    bgColor : "bg-purple-500/80",
    storyText: "4. The Johnson Family Reunion The Johnson family hadn't gathered together in years, so they decided to organize a large family reunion. To commemorate the occasion, they turned to Freesnaps for printing a family photo book filled with pictures from past reunions and candid shots from the current event. The book was a hit! Family members laughed and shared stories as they flipped through the pages, and it became a cherished keepsake that would be passed down through generations.",
    authorName: "Johnson Family Story"
  },
  {
    bgColor : "bg-teal-500/80",
    storyText: "5. Liam’s Business Launch Liam was launching his startup and needed promotional materials that would make a lasting impression. He opted for Freesnaps to create sleek business cards and eye-catching flyers. The quality of the prints exceeded his expectations, and he received numerous compliments during networking events. The professional look of his materials helped him establish credibility with potential clients, leading to several successful partnerships shortly after his launch.",
    authorName: "Liam’s Story"
  },
  {
    bgColor : "bg-pink-500/80",
    storyText: "6. Sophia’s Travel Journal Sophia had traveled to over ten countries in the past year, capturing breathtaking photos along the way. To preserve her memories, she used Freesnaps to create a travel journal filled with her favorite images and stories from each destination. The glossy prints showcased the beauty of her travels, and she shared the journal with friends and family. Inspired by her experience, several of them started using Freesnaps to document their own adventures.",
    authorName: "Sophia’s Story"
  },
  {
    bgColor : "bg-indigo-500/80",
    storyText: "7. Mark’s Graduation Celebration Mark was graduating from college and wanted to celebrate this milestone with a memorable party. He decided to use Freesnaps to create large prints of his favorite moments from his college life, including photos with friends, professors, and at significant events. The prints served as decorations at his graduation party, sparking conversations and nostalgia among his guests. The night ended with laughter and joy, and Mark’s prints became a cherished reminder of his college years, inspiring him to continue using Freesnaps for future life events.",
    authorName: "Mark’s Story"
  }
]
</script>
