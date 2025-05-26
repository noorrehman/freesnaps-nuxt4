<template>
  <div>
    <div class="lg:flex lg:flex-row-reverse lg:h-[650px]">
      <div class="w-full lg:w-4/6 object-cover h-[250px] lg:h-[650px] relative">
        <NuxtImg class="w-full object-cover h-full"
                 src="images/prints/prints-header.webp" alt="Freesnaps prints"/>
      </div>
      <div class="bg-[#4b5566] px-2.5 py-2 text-white text-center lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:px-16 xl:w-[36%] xl:px-10">
        <h2 class="text-xl font-bold leading-9 lg:text-3xl lg:leading-[50px]">{{('mix & match')}}</h2>
        <h1 class="text-3xl font-extrabold lg:my-2.5 leading-9 lg:text-5xl lg:leading-[50px]">{{('Your sizes')}}</h1>
        <h3 class="text-xl font-bold leading-9 lg:text-3xl lg:leading-[50px]">{{('to get best value')}}</h3>
        <NuxtLink to="#products" class="bg-[#0c7088] text-base px-4 py-1 lg:py-1.5 rounded-full !text-white font-semibold my-2 inline-block lg:max-w-52 lg:w-56 lg:mx-auto">SHOP NOW</NuxtLink>
      </div>
    </div>

    <!-- <div class="max-w-7xl mx-auto px-5 my-3">
        <p class="text-center text-lg leading-9 font-normal text-[#3b3938] lg:text-xl lg:leading-10">No subscription | No sign up <br />Pay by card or PayPal</p>
        <p class="text-center text-lg leading-9 font-normal text-[#3b3938] lg:text-xl lg:leading-10">Choose a print size to get started</p>
    </div> -->
    <!-- <div class="max-w-7xl mx-auto px-5 lg:flex lg:mt-6 lg:space-x-6">
        <div class="lg:w-1/2 lg:p-2">
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="overflow-hidden" arrows>
                <NuxtImg :src="item" class="w-full" draggable="false" />
            </UCarousel>
        </div>
        <div class="lg:w-1/2">
            <h2 class="text-[22px] text-center mt-2 leading-9 font-light lg:text-left lg:mt-0 lg:mb-3">Professional Photo Prints From Just <strong class="font-bold">£0.15 per print</strong></h2>
            <p class=" text-base font-light leading-8">Nothing compares to the magic of seeing your favourite memories in print. Reliving those first steps, first laughs – there’s nothing like it, and you'll find we're the best photo printing service for you.</p>
        </div>
    </div> -->

    <div class="max-w-7xl mx-auto px-5 my-4 lg:my-6">
      <h2 class="text-xl text-center">Choose a print size below to get started</h2>
    </div>

    <UContainer class=" px-5 mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2" id="products">
      <div class="shadow-[2px_2px_11px_4px_rgba(0,0,0,.09)] p-4 py-8" v-for="product in products" :key="product.title">
        <h3 class="text-[22px] font-light leading-9 flex items-center space-x-2">
          <NuxtLink :to="product.link" :aria-description="product.title"><span>{{ product.title }}</span></NuxtLink>
          <UBadge v-if="product.promotion" color="primary" class="bg-red-500" variant="solid">{{ product.promotion }}
          </UBadge>
        </h3>
        <div class="lg:flex lg:flex-row-reverse">
          <div class="lg:ml-4 w-full h-64 lg:w-[220px] lg:h-[150px]">
            <NuxtLink :to="product.link" class="w-full" :aria-description="product.title">
              <NuxtImg :src="product.image" class="object-cover h-64 mt-3 lg:w-[220px] lg:h-[140px]" provider="s3Provider" :alt="product.title"/>
            </NuxtLink>
          </div>
          <div class="flex-1">
            <p class="text-sm text-dim-gray font-extralight mt-6 lg:mt-2">Select a size continue:</p>
            <div class="mt-3 grid grid-cols-2 gap-3 max-w-[70%] lg:max-w-[100%]">
              <div class="w-full text-center" v-for="size in product.sizes" :key="size.title">
                <NuxtLink :aria-description="size.title + ' ' + product.title" :to="size.link"
                          class="relative border border-[#c9c9c9] w-full block py-3 text-base">
                  {{ size.title }}
                  <!--                                  <UBadge v-if="size.title.startsWith('6x4')" color="primary" class="bg-red-500 text-[10px] w-18 h-8 absolute top-0.5 -right-16 leading-[2px]" variant="solid">Best Seller</UBadge>-->
                </NuxtLink>
              </div>
            </div>
            <div v-if="product.rating" class="mt-4 flex lg:justify-center">
              <UIcon name="i-heroicons-star-solid" v-for="i in product.rating" class="text-yellow-500 fill-amber-500 w-6 h-6"/>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <div>
      <WhyChooseUs />
    </div>

    <div class="bg-[#4b5566] mt-8">
      <div class="mx-auto p-5 lg:px-28">
        <h3 class="text-center text-white text-xl mt-2 mb-4">How to order with FreeSnaps</h3>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div v-for="(orderStep, index) in orderSteps" :key="orderStep.title" class="text-white text-center">
            <NuxtImg :src="orderStep.image" class="w-24 mx-auto text-white" provider="s3Provider" :alt="orderStep.title"/>
            <h4 class="mt-6 mb-3 text-base leading-6">{{ index + 1 }}. {{ orderStep.title }}</h4>
            <!-- <p class="text-xs text-gray-300 font-extralight leading-6">{{ orderStep.description }}</p> -->
          </div>
        </div>
      </div>
    </div>

    <UContainer class="p-4  lg:px-32 lg:mt-12 ">
      <h2 class="text-left text-2xl my-4 lg:text-center lg:my-6">See our customer reviews</h2>
      <div class="grid grid-cols-1 gap-6">
        <div v-for="review in reviews" :key="review.message" class="p-5 text-center shadow-[1px_1px_8px_1px_#d3d3d3]">
          <p class="text-dim-gray text-sm leading-7">{{ review.message }}</p>
          <p class="font-medium text-dim-gray text-sm leading-7 mt-8 mb-2">{{ review.by }}</p>
          <p class="flex items-center justify-center">
            <NuxtImg alt="star" class="w-5" v-for="star in review.stars" provider="s3Provider" :key="star"
                     src="/prints/review_star.svg"/>
          </p>
        </div>
      </div>
    </UContainer>

    <UContainer class=" p-4 text-center lg:mt-12">
      <h2 class="text-xl font-normal my-3 lg:text-2xl">Inspiration for your new photo prints</h2>
      <p class="text-sm font-light text-dim-gray">Here for creative ideas for your photo prints</p>
      <div class="grid grid-cols-2 gap-6 mt-8 py-4 text-left underline lg:grid-cols-4 lg:gap-10">
        <NuxtLink to="https://freesnapsphototiles.com/gallery-walls/7">
          <NuxtImg src="/prints/inspiration_1.webp" alt="16 Beautiful Memories" provider="s3Provider"/>
          <p class="mt-3">16 Beautiful Memories</p>
        </NuxtLink>
        <NuxtLink to="https://freesnapsphototiles.com/gallery-walls/28">
          <NuxtImg src="/prints/inspiration_2.webp" alt="Dawn and Jade" provider="s3Provider"/>
          <p class="mt-3">Dawn and Jade</p>
        </NuxtLink>
        <NuxtLink to="https://freesnapsphototiles.com/gallery-walls/10">
          <NuxtImg src="/prints/inspiration_3.webp" alt="Fabulous 4 with Wide Mount" provider="s3Provider"/>
          <p class="mt-3">Fabulous 4 with Wide Mount</p>
        </NuxtLink>
        <NuxtLink to="https://freesnapsphototiles.com/gallery-walls/25">
          <NuxtImg src="/prints/inspiration_4.webp" alt="Simply 4 Portrait" provider="s3Provider"/>
          <p class="mt-3">Simply 4 Portrait</p>
        </NuxtLink>
      </div>
    </UContainer>

  </div>
</template>

<script setup lang="ts">
const items = [
  '/images/prints/prints_1.webp'
]

const products = [
  {
    title: "Standard",
    image: "/prints/standard-prints.webp",
    link: '/product/standard-prints',
    promotion: "Most Popular",
    sizes: [
      {
        title: '6x4"',
        link: '/product/standard-prints/?attribute_pa_standard=6x4'
      },
      {
        title: '4x5"',
        link: '/product/standard-prints/?attribute_pa_standard=4x5'
      },
      {
        title: '4x3.5"',
        link: "/product/standard-prints/?attribute_pa_standard=4x3.5"
      },
      {
        title: "More",
        link: "/product/standard-prints/"
      }
    ]
  },
  {
    title: "Premium Standard",
    image: "/prints/premium-standard.webp",
    link: '/product/premium-standard',
    sizes: [
      {
        title: '7x5"',
        link: '/product/premium-standard/?attribute_pa_standard=7x5'
      },
      {
        title: "More",
        link: "/product/premium-standard/"
      }
    ],
    rating: 5,
  },
  {
    title: "Vintage Square",
    image: "/prints/vintage_square_print.webp",
    link: '/product/instagram-prints',
    sizes: [
      {
        title: '4x4"',
        link: '/product/instagram-prints/?attribute_pa_instagram=4x4'
      },
      {
        title: '5x5"',
        link: '/product/instagram-prints/?attribute_pa_instagram=5x5'
      },
      {
        title: "More",
        link: "/product/instagram-prints"
      }
    ]
  },
  {
    title: "Large",
    image: "/prints/large-prints.webp",
    link: '/product/large-prints',
    promotion: "Most Popular",
    sizes: [
      {
        title: '10x8"',
        link: '/product/large-prints/?attribute_pa_large=10x8'
      },
      {
        title: '8x6"',
        link: "/product/large-prints/?attribute_pa_large=8x6"
      },
      {
        title: '12x8"',
        link: "/product/large-prints/?attribute_pa_large=12x8"
      },
      {
        title: "More",
        link: "/product/large-prints/"
      }
    ]
  },
  {
    title: "Extra Large",
    image: "/prints/extra-large.webp",
    link: '/product/extra-large',
    sizes: [
      {
        title: '10x15"',
        link: '/product/extra-large/?attribute_pa_large=10x15'
      },
      {
        title: '12x18"',
        link: "/product/extra-large/?attribute_pa_large=12x18"
      },
      {
        title: '16x20"',
        link: "/product/extra-large/?attribute_pa_large=16x20"
      },
      {
        title: "More",
        link: "/product/extra-large/"
      }
    ]
  },
  {
    title: "Poster",
    image: "/prints/poster-prints.webp",
    link: '/product/poster-prints',
    sizes: [
      {
        title: '20x30"',
        link: '/product/poster-prints/?attribute_pa_poster=20x30'
      },
      {
        title: '30x40"',
        link: '/product/poster-prints/?attribute_pa_poster=30x40'
      },
      {
        title: 'A1',
        link: "/product/poster-prints/?attribute_pa_poster=A1"
      },
      {
        title: "More",
        link: "/product/poster-prints"
      }
    ]
  }
]

const orderSteps = [
  {
    image: "/prints/how_order_1.svg",
    title: "Pick your size",
    description: "We’ve a huge range of options. Make sure your photographs are high resolution if you’re printing something big."
  },
  {
    image: "/prints/how_order_2.svg",
    title: "Upload your images",
    description: "Choose your favourites from your phone, tablet or computer – it takes seconds to upload."
  },
  {
    image: "/prints/how_order_3.svg",
    title: "Finalise your order",
    description: "Choose how many prints you want, a gloss or matt finish, and any other details like white borders."
  },
  {
    image: "/prints/how_order_4.svg",
    title: "Approve your order",
    description: "Give your photos a final check before approving, looking at cropping, aspect ratio etc."
  },
  {
    image: "/prints/how_order_5.svg",
    title: "Expect your delivery",
    description: "Your order will be printed, shipped and delivered to your door within a few days. (Next day delivery is also available.)"
  }
]

const reviews = [
  {
    message: "Photos are printed on quality paper, nice and glossy, just what I wanted. Also love the choice of sizes of photos available and quick delivery service too. Would recommend this company and I will use again in the future. Thank you",
    by: "Mary Hepburn",
    stars: 5
  },
]

const inspirations = [
  {
    image: "/images/prints/inspiration_1.webp",
    text: "",
    link: ""
  }
]

useSeoMeta({
  title: 'Free Prints | Freesnaps',
  ogTitle: 'Free Prints | Freesnaps',
  description: 'Grab free prints online and make convert wall into stunning art.',
  ogDescription: 'Grab free prints online and make convert wall into stunning art.',
  ogImage: '/images/logo.svg',
  twitterCard: 'summary_large_image',
})

</script>