<template>
  <UContainer class="max-w-5xl p-5 font-light">
    <div class="lg:my-4">
      <h1 class="text-xl lg:text-2xl font-medium">Contact Us</h1>
    </div>
    <div class="mt-4 lg:mb-10 flex flex-col lg:flex-row">
      <div class="flex-1 flex items-center justify-center">
        <div v-if="emailSent" class="flex items-center justify-center">
          <div class="flex items-center space-x-2">
            <div>
              <UIcon name="i-heroicons-check-circle" class="w-12 h-12 text-green-700"/>
            </div>
            <div>
              <h2 class="text-lg font-medium">Email sent successfully.</h2>
              <p>We will reach you as soon as possible</p>
            </div>
          </div>
        </div>
        <div v-if="!emailSent" class="w-full">
          <UForm ref="form" :state="state" class="grid grid-cols-2 gap-4">
            <UFormField label="Email*" name="email" class="col-span-2 w-full">
              <UInput v-model="state.email" size="xl" class="w-full" />
            </UFormField>
            <UFormField label="Name" name="name">
              <UInput v-model="state.name" size="xl" class="w-full"/>
            </UFormField>
            <UFormField label="Phone" name="phone">
              <UInput v-model="state.phone" size="xl" class="w-full"/>
            </UFormField>
            <UFormField label="Subject*" name="subject" class="col-span-2 w-full">
              <UInput v-model="state.subject" size="xl"  class=" w-full"/>
            </UFormField>
            <UFormField label="Message*" name="message" class="col-span-2">
              <UTextarea v-model="state.message" rows="8" color="gray" variant="outline" placeholder="Type your query..." class="w-full"/>
            </UFormField>
            <UButton :disabled="sendingEmail" :loading="sendingEmail" @click="sendEmail" size="xl" type="submit" class="block mt-2 bg-primary uppercase col-span-2">
              Submit
            </UButton>
            <p v-if="emailError" class="text-red-500 col-span-2">Something went wrong, try again</p>
          </UForm>
        </div>
      </div>
      <div class="w-full mt-4 lg:mt-0 lg:w-1/3 p-3 text-center flex items-center justify-center">
        <div class="w-full">
          <h2 class="text-lg font-medium">Alternative</h2>
          <p class="my-2">Use your favourite email client to reach us directly at</p>
          <p class="flex items-center space-x-0.5 justify-center">
            <UIcon name="i-heroicons-envelope" class="w-5 h-5"/>
            <a href="mailto:hello@freesnaps.co.uk" class="text-primary">hello@freesnaps.co.uk</a>
          </p>
        </div>
      </div>
    </div>
  </UContainer>
</template>


<script setup>
const config = useRuntimeConfig()
const state = ref({})
const sendingEmail = ref(false)
const emailSent = ref(false)
const emailError = ref("")
const {$internalApi} = useNuxtApp()

const sendEmail = async () => {
  sendingEmail.value = true
  let phone = ""
  if(state.value.phone){
    phone = `Phone: ${state.value.phone}<br /><br />`
  }
  const emailContent = {
    sender: { name: 'FreeSnaps', email: 'hello@freesnaps.co.uk' },
    from: { name: 'FreeSnaps', email: 'hello@freesnaps.co.uk' },
    to: [{ email: config.public.contactEmail, name: "Freesnaps Contact Form" }],
    subject: `${state.value.subject}`,
    htmlContent: `<html><head></head><body>${state.value.message} <br /><br /><br /> ${phone}</body></html>`,
    replyTo: { email: state.value.email, name: state.value.name || 'Customer' }
  }
  let response = await $internalApi.email.sendEmail(emailContent)
  sendingEmail.value = false
  if(response.ok){
    emailSent.value = true
  }else{
    emailError.value = "Something went wrong! Try again."
  }
}
useSeoMeta({
  title: 'Contact | Freesnaps',
  description: 'Contact freesnaps here for any query.',
})
</script>