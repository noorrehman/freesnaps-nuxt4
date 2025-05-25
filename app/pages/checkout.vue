<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>

    <div class="flex flex-wrap -mx-4">
      <!-- Checkout Form -->
      <div class="w-full lg:w-2/3 px-4 mb-8">
        <div class="checkout-container p-6 rounded-lg">
          <ol class="checkout-steps mb-6">
            <!-- Customer Information -->
            <li class="mb-8">
              <div class="flex items-center section-heading pb-2 mb-4">
                <div class="step-number flex items-center"></div>
                <h2 class="text-xl font-semibold">Customer Information</h2>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" class="w-full px-3 py-2 border rounded-md" required="">
                  <div data-lastpass-icon-root="" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" class="w-full px-3 py-2 border rounded-md" required="">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email</label>
                  <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-md" required="">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border rounded-md" required="">
                </div>
              </div>
            </li>

            <!-- Delivery Information -->
            <li class="mb-8">
              <div class="flex items-center section-heading pb-2 mb-4">
                <div class="step-number flex items-center"></div>
                <h2 class="text-xl font-semibold">Delivery Information</h2>
              </div>

              <div class="grid grid-cols-1 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="address1">Address Line 1</label>
                  <input type="text" id="address1" name="address1" class="w-full px-3 py-2 border rounded-md" required="">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="address2">Address Line 2 (Optional)</label>
                  <input type="text" id="address2" name="address2" class="w-full px-3 py-2 border rounded-md">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1" for="city">City</label>
                    <input type="text" id="city" name="city" class="w-full px-3 py-2 border rounded-md" required="">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1" for="county">County</label>
                    <input type="text" id="county" name="county" class="w-full px-3 py-2 border rounded-md" required="">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1" for="postcode">Postcode</label>
                    <input type="text" id="postcode" name="postcode" class="w-full px-3 py-2 border rounded-md" required="">
                  </div>
                </div>
              </div>
            </li>

            <!-- Payment Method -->
            <li>
              <div class="flex items-center section-heading pb-2 mb-4">
                <div class="step-number flex items-center"></div>
                <h2 class="text-xl font-semibold">Payment Method</h2>
              </div>

              <!-- Credit/Debit Card Option -->
              <div class="payment-option payment-option-active p-4 rounded-md mb-4">
                <div class="flex items-center mb-3">
                  <input type="radio" id="card" name="paymentMethod" value="card" checked="" class="mr-2">
                  <label for="card" class="font-medium flex items-center">
                    <span class="mr-2">Credit/Debit Card</span>
                    <span class="flex">
                                            <i class="fab fa-cc-visa text-xl mr-1 text-blue-800"></i>
                                            <i class="fab fa-cc-mastercard text-xl mr-1 text-red-500"></i>
                                            <i class="fab fa-cc-amex text-xl text-blue-500"></i>
                                        </span>
                  </label>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium mb-1" for="cardName">Name on Card</label>
                    <input type="text" id="cardName" name="cardName" class="w-full px-3 py-2 border rounded-md">
                    <div data-lastpass-icon-root="" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium mb-1" for="cardNumber">Card Number</label>
                    <div class="relative">
                      <input type="text" id="cardNumber" name="cardNumber" class="w-full px-3 py-2 border rounded-md" placeholder="1234 5678 9012 3456">
                      <i class="fas fa-lock absolute right-3 top-3 text-gray-400"></i>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1" for="expiry">Expiry Date</label>
                    <input type="text" id="expiry" name="expiry" class="w-full px-3 py-2 border rounded-md" placeholder="MM/YY">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1" for="cvv">CVV</label>
                    <div class="relative">
                      <input type="text" id="cvv" name="cvv" class="w-full px-3 py-2 border rounded-md" placeholder="123">
                      <span class="absolute right-3 top-3 text-gray-400 cursor-help" title="3-4 digit security code on the back of your card">
                                                <i class="fas fa-question-circle"></i>
                                            </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- PayPal Option -->
              <div class="payment-option p-4 rounded-md mb-4">
                <div class="flex items-center">
                  <input type="radio" id="paypal" name="paymentMethod" value="paypal" class="mr-2">
                  <label for="paypal" class="font-medium flex items-center">
                    <span class="mr-2">PayPal</span>
                    <i class="fab fa-paypal text-xl text-blue-700"></i>
                  </label>
                </div>
                <p class="text-sm text-gray-600 mt-2 ml-6">You will be redirected to PayPal to complete your payment securely.</p>
              </div>

              <!-- Apple Pay Option -->
              <div class="payment-option p-4 rounded-md mb-4">
                <div class="flex items-center">
                  <input type="radio" id="applepay" name="paymentMethod" value="applepay" class="mr-2">
                  <label for="applepay" class="font-medium flex items-center">
                    <span class="mr-2">Apple Pay</span>
                    <i class="fab fa-apple-pay text-xl"></i>
                  </label>
                </div>
                <p class="text-sm text-gray-600 mt-2 ml-6">Fast, secure checkout with Apple Pay.</p>
              </div>

              <div class="flex items-center mt-6">
                <input type="checkbox" id="terms" name="terms" class="mr-2" required="">
                <label for="terms" class="text-sm">I agree to the <a href="#" class="text-blue-600 hover:underline">Terms and Conditions</a></label>
              </div>

              <button class="btn-primary mt-6 w-full text-white font-semibold py-3 px-4 rounded-md">
                Complete Order
              </button>

              <div class="text-center mt-4">
                <div class="flex justify-center items-center">
                  <UIcon name="i-heroicons-lock-closed-solid" class="text-green-600 mr-2"></UIcon>
                  <span class="text-sm text-gray-600">Secure Payment</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="w-full lg:w-1/3">
        <div class="order-summary p-6 rounded-lg sticky top-4">
          <h2 class="text-xl font-semibold mb-4">Order Summary</h2>

          <div class="border-b pb-4 mb-4">
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

          <div class="border-b pb-4 mb-4">
            <div class="flex justify-between mb-2">
              <span>Shipping</span>
              <span class="font-semibold">£2.99</span>
            </div>
            <div class="text-right text-gray-600 text-sm">Next Day Delivery</div>
          </div>

          <div class="border-b pb-4 mb-4">
            <div class="flex justify-between mb-2">
              <span>Subtotal</span>
              <span class="font-semibold">£10.24</span>
            </div>
            <div class="flex justify-between mb-2 text-green-600">
              <span>Discount (20%)</span>
              <span class="font-semibold">-£2.05</span>
            </div>
          </div>

          <div class="flex justify-between mb-1">
            <span class="text-lg font-bold">Total</span>
            <span class="text-lg font-bold">£8.19</span>
          </div>
          <div class="text-right text-gray-600 text-sm mb-4">VAT included</div>

          <div class="mb-6">
            <div class="trust-badge">
              <i class="fas fa-shield-alt text-xl"></i>
              <span>Secure Checkout</span>
            </div>
            <div class="trust-badge">
              <i class="fas fa-truck text-xl"></i>
              <span>Next Day Delivery</span>
            </div>
            <div class="trust-badge">
              <i class="fas fa-star text-xl"></i>
              <span>Excellent Rated Service</span>
            </div>
          </div>

          <div class="border-t pt-4">
            <h3 class="font-semibold mb-2">Our Customers Love FreeSnaps</h3>
            <div class="mb-2">
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
          <div class="text-4xl text-blue-700 mb-4">
            <i class="fas fa-shipping-fast"></i>
          </div>
          <h4 class="font-semibold mb-2">Next Day Delivery</h4>
          <p class="text-gray-600">Order before 4PM for next day delivery</p>
        </div>

        <div class="text-center p-4">
          <div class="text-4xl text-blue-700 mb-4">
            <i class="fas fa-star"></i>
          </div>
          <h4 class="font-semibold mb-2">Excellent Rated</h4>
          <p class="text-gray-600">Over 100,000 happy customers</p>
        </div>

        <div class="text-center p-4">
          <div class="text-4xl text-blue-700 mb-4">
            <i class="fas fa-lock"></i>
          </div>
          <h4 class="font-semibold mb-2">Secure Checkout</h4>
          <p class="text-gray-600">All payments are encrypted and secure</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.checkout-container {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.section-heading {
  border-bottom: 2px solid #f0f0f0;
}

.payment-option {
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;
}

.payment-option:hover, .payment-option-active {
  border-color: #4254b5;
  background-color: #f7f9ff;
}

.btn-primary {
  background-color: #4254b5;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #3548a0;
}

.checkout-steps {
  counter-reset: step;
}

.step-number::before {
  counter-increment: step;
  content: counter(step);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #4254b5;
  color: white;
  margin-right: 8px;
}

input:focus, select:focus {
  border-color: #4254b5;
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 84, 181, 0.2);
}

.input-error {
  border-color: #e91e63;
}

.order-summary {
  background-color: #f7f9ff;
}

.payment-logos img {
  height: 24px;
  margin-right: 8px;
}

.trust-badge {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.trust-badge i {
  margin-right: 8px;
  color: #4254b5;
}
</style>