<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
    name: v.string(),
    email: v.pipe(v.string(), v.email('Invalid email')),
    message: v.string()
})

type Schema = v.InferOutput<typeof schema>

const state = reactive<Schema>({
    name: '',
    email: '',
    message: ''
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log('Form submitted successfully:', event.data)
    try {
    const res = await $fetch('https://formspree.io/f/xeozralp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: event.data
    })

    

    toast.add({ 
      title: 'Success', 
      description: 'Thanks for reaching out — I’ll be in touch soon.', 
      color: 'success' 
    })

    // Reset form
    state.email = ''
    state.name = ''
    state.message = ''
  } catch (err) {
    toast.add({ 
      title: 'Error', 
      description: 'Something went wrong. Please try again later.', 
      color: 'error' 
    })
  }
}
</script>

<template>
  <section class="mb-24">
    <UContainer>
      <h2 class="text-xl text-center sm:text-2xl max-w-md mx-auto">
        Let&apos;s Build Something Great Together
      </h2>
      <p class="max-w-lg text-sm text-center opacity-75 mt-4 mx-auto">
        I&apos;m always excited to connect with new people and explore fresh opportunities. 
        Whether you&apos;re looking for a custom website, an e‑commerce solution, or just 
        want to say hello, drop me a message—I&apos;ll get back to you as soon as possible.
      </p>

      <UForm 
        :schema="schema" 
        :state="state" 
        class="mt-8 flex flex-col"
        @submit="onSubmit"
      >
        <div class="flex flex-wrap lg:flex-nowrap justify-between lg:gap-8">
            <UInput label="Name" name="name" placeholder="Your Name" class="mt-4 w-full lg:flex-1" />
            <UInput label="Email" name="email" type="email" placeholder="Your Email" class="mt-4 w-full lg:flex-1" />
        </div>
        <UTextarea label="Message" name="message" placeholder="Your Message" class="mt-4" :rows="5" />
        <UButton type="submit" class="mt-4 max-w-max mx-auto">Get In Touch</UButton>
      </UForm>
    </UContainer>
  </section>
</template>