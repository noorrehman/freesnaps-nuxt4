<template>
  <UContainer class="px-2 lg:px-4 py-8 ">
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>
    <div class="flex flex-col lg:flex-row lg:-mx-4 ">
      <!-- Checkout Form -->
      <div class="w-full lg:w-2/3 px-0 lg:px-4 mb-8 shadow-xl border rounded-lg border-gray-200">
        <div class="checkout-container p-6 rounded-lg">
          <ol class="checkout-steps mb-6">
            <!-- Customer Information -->
            <li class="mb-8">
              <div class="flex items-center border-b-2 border-gray-200  pb-2 mb-4">
                <UIcon name="i-bi-1-circle-fill" class="bg-primary mr-2 size-6" />
                <h2 class="text-xl font-semibold">Customer Information</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <UFormField label="First Name">
                    <UInput type="text" v-model="firstName" name="firstName" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
                  <UFormField label="Last Name">
                    <UInput type="text" v-model="lastName" name="lastName" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
                  <UFormField label="Email">
                    <UInput type="text"  v-model="email" name="email" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
                  <UFormField label="Phone">
                    <UInput type="text" v-model="phone" name="phone" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
              </div>
            </li>
            <!-- Delivery Information -->
            <li class="mb-8">
              <div class="flex items-center border-b-2 border-gray-200 pb-2 mb-4">
                <UIcon name="i-bi-2-circle-fill" class="bg-primary mr-2 size-6" />
                <h2 class="text-xl font-semibold">Delivery Information</h2>
              </div>
              <div class="grid grid-cols-1 gap-4">
                <div class="space-y-4">
                  <UFormField label="Address Line 1">
                    <UInput type="text" v-model="address1" name="address1" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
                  <UFormField label="Address Line 2 (Optional)">
                    <UInput type="text" v-model="address2" name="address2" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <UFormField label="City">
                    <UInput type="text" v-model="city" name="city" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
                  <UFormField label="Country">
                    <UInput type="text" v-model="country" name="country" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
                  <UFormField label="Postcode">
                    <UInput type="text" v-model="postcode" name="postcode" class="w-full outline-primary" size="xl" required/>
                  </UFormField>
                </div>
              </div>
            </li>
            <!-- Payment Method -->
            <li>
              <div class="flex items-center border-b-2 border-gray-200 pb-2 mb-4">
                <UIcon name="i-bi-3-circle-fill" class="bg-primary mr-2 size-6" />
                <h2 class="text-xl font-semibold">Payment Method</h2>
              </div>
              <!-- Credit/Debit Card Option -->
              <div class="border border-primary bg-primary/5 p-4 rounded-md mb-4 ">
                <div class="flex items-center mb-3">
                  <UIcon name="i-fluent-radio-button-20-filled" class="size-5 bg-primary" />
                  <span class="ml-1 text-lg">Credit/Debit Card</span>
                  <span class="flex space-x-1 ml-2">
                      <UIcon name="i-cib-cc-visa" class="size-6 bg-primary"/>
                      <UIcon name="i-cib-cc-mastercard" class="size-6 bg-red-500 "/>
                      <UIcon name="i-fa6-brands-cc-amex" class="size-6  bg-blue-500"/>
                    </span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 grow">
                    <UFormField label="Name on Card" class="lg:col-span-2 ">
                      <UInput type="text" v-model="cardName" name="cardName" class="w-full outline-primary" size="xl" required/>
                    </UFormField>
                  <UFormField label="Card Number" class=" lg:col-span-2">
                    <UInput type="text" v-model="cardNumber" name="cardNumber" class="w-full outline-primary" size="xl"
                            trailing-icon="i-heroicons-solid-lock-closed" placeholder="012345..."  required/>
                  </UFormField>
                  <UFormField label="Expiry Date" class="">
                    <UInput type="text" v-model="expiry" name="expiry" class="w-full outline-primary" size="xl" placeholder="MM/YY"  required/>
                  </UFormField>
                  <UFormField label="CVV" class="">
                    <UInput type="text" v-model="cvv" name="cvv" class="w-full outline-primary" size="xl"
                            trailing-icon="i-heroicons-question-mark-circle-16-solid" placeholder="123"  required/>
                  </UFormField>
                </div>
              </div>

              <!-- PayPal Option -->
              <div class="flex-col p-4 rounded-md mb-4 border border-gray-300" >
                <div class="flex items-center space-x-2">
                  <UIcon name="i-fluent-radio-button-20-regular" class="size-4 " />
                  <span class="ml-1 text-lg">PayPal</span>
                  <UIcon name="i-fa-paypal" class="size-5 bg-primary"/>
                </div>
                <p class="text-sm text-gray-600 mt-2 ml-6">You will be redirected to PayPal to complete your payment securely.</p>
              </div>
              <div class="flex-col p-4 rounded-md mb-4 border border-gray-300" >
                <div class="flex items-center space-x-2">
                  <UIcon name="i-fluent-radio-button-20-regular" class="size-4 " />
                  <span class="ml-1 text-lg">Apple Pay</span>
                  <UIcon name="i-logos-apple-pay" class="size-7"/>
                </div>
                <p class="text-sm text-gray-600 mt-2 ml-6">Fast, secure checkout with Apple Pay.</p>
              </div>
              <div class="flex items-center mt-6">
                <UCheckbox v-model="value" />
                <span class=" text-sm ml-1">I agree to the
                <span  class="text-blue-700">Terms and Conditions</span>
                </span>
              </div>
              <UButton  size="xl" class="block bg-primary hover:bg-primary/95 hover:cursor-pointer w-full mt-8 py-3 font-bold" >Complete Order</UButton>
              <div class="text-center mt-4">
                <div class="flex justify-center items-center">
                  <UIcon name="i-fa6-solid-lock" class="text-green-700 mr-2"></UIcon>
                  <span class=" text-gray-600">Secure Payment</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="w-full lg:w-1/3 lg:ml-4 ">
        <div class="sticky top-4  p-8 bg-blue-600/5 fade-all-edges">
          <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
          <div class="border-b border-gray-300 pb-4 mb-4">
            <div class="flex justify-between mb-2">
              <span>6x4 Photo Prints</span>
              <span class="font-semibold">20 prints FREE</span>
            </div>
            <div class="text-right text-gray-600">£0.00</div>

            <div class="flex justify-between mb-2 mt-4">
              <span>4x4 Photo Prints</span>
              <span class="font-semibold">10 prints @ £0.20</span>
            </div>
            <div class="text-right text-gray-600">£2.00</div>

            <div class="flex justify-between mb-2 mt-4">
              <span>5x7 Photo Prints</span>
              <span class="font-semibold">15 prints @ £0.35</span>
            </div>
            <div class="text-right text-gray-600">£5.25</div>
          </div>

          <div class="border-b border-gray-300 pb-4 mb-4">
            <div class="flex justify-between mb-2">
              <span>Shipping</span>
              <span class="font-semibold">£2.99</span>
            </div>
            <div class="text-right text-gray-600 text-sm">Next Day Delivery</div>
          </div>

          <div class="border-b border-gray-300 pb-4 mb-4">
            <div class="flex justify-between mb-2">
              <span>Subtotal</span>
              <span class="font-semibold">£10.24</span>
            </div>
            <div class="flex justify-between mb-2 text-green-700">
              <span>Discount (20%)</span>
              <span class="font-semibold">-£2.05</span>
            </div>
          </div>

          <div class="flex justify-between mb-1">
            <span class="text-lg font-bold">Total</span>
            <span class="text-lg font-bold">£8.19</span>
          </div>
          <div class="text-right text-gray-600 text-sm mb-4">VAT included</div>

          <div class="mb-6 text-lg space-y-2">
            <div class="flex items-center space-x-2">
              <UIcon name="i-fa-solid-shield-alt" class="size-6 bg-primary"/>
              <span>Secure Checkout</span>
            </div>
            <div class="flex items-center space-x-2">
              <UIcon name="i-fa6-solid-truck" class="size-6 bg-primary"/>
              <span>Next Day Delivery</span>
            </div>
            <div class="flex items-center space-x-2">
              <UIcon name="i-fa6-solid-star" class="size-6 bg-primary"/>
              <span>Excellent Rated Service</span>
            </div>
          </div>

          <div class="border-t border-gray-300 pt-4">
            <h3 class="font-semibold mb-2">Our Customers Love FreeSnaps</h3>
            <div class="flex items-center space-x-2 mb-2">
              <span>Rated excellent on</span>
              <img src="https://freesnaps.co.uk/images/trust_pilot_star_with_text.png" alt="Trust Pilot" class="inline-block h-5">
            </div>
            <img src="https://freesnaps.co.uk/images/trust_pilot_5_star.png" alt="5 stars rating" class="h-6 mb-3">
            <div class="text-sm italic">
              "The service and quality is amazing..arrive on time I honestly can't fault them..Will be ordering more"
            </div>
            <div class="text-sm font-semibold mt-1">-Beena Kelly</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust Features -->
    <div class="my-12">
      <h3 class="text-xl font-semibold mb-6 text-center">Why Choose FreeSnaps</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-4">
          <UIcon name="i-fa6-solid-truck-fast" class="size-10 bg-primary mb-4" />
          <h4 class="font-semibold mb-2">Next Day Delivery</h4>
          <p class="text-gray-600">Order before 4PM for next day delivery</p>
        </div>

        <div class="text-center p-4">
          <UIcon name="i-fa6-solid-star" class="size-10 bg-primary mb-4" />
          <h4 class="font-semibold mb-2">Excellent Rated</h4>
          <p class="text-gray-600">Over 100,000 happy customers</p>
        </div>

        <div class="text-center p-4">
          <UIcon name="i-fa6-solid-lock" class="size-10 bg-primary mb-4" />
          <h4 class="font-semibold mb-2">Secure Checkout</h4>
          <p class="text-gray-600">All payments are encrypted and secure</p>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">

const value = ref(false)

</script>
