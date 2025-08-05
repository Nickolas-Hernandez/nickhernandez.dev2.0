<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
    name: v.string(),
    email: v.pipe(v.string(),
           v.nonEmpty('Please enter your email.'),
           v.email('The email is badly formatted.'),
           v.maxLength(30, 'Your email is too long.')),
    message: v.string(),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
    name: '',
    email: '',
    message: '',
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

        state.email = ''
        state.name = ''
        state.message = ''
    } catch (err) {
        console.error('Error submitting form:', err)
        toast.add({ 
            title: 'Error', 
            description: 'Something went wrong. Please try again later.', 
            color: 'error' 
        })
    }
}
</script>

<template>
    <section id="contact" class="py-24">
        <h2 class="text-xl text-center sm:text-2xl max-w-md mx-auto">
        Let&apos;s Build Something Great Together
        </h2>
        <p class="max-w-lg text-sm text-center opacity-75 mt-4 mx-auto">
        I&apos;m always excited to connect with new people and explore fresh opportunities. 
        Whether you&apos;re looking for a custom website, an e‑commerce solution, or just 
        want to say hello, drop me a message—I&apos;ll get back to you as soon as possible.
        </p>
        <UContainer>
            <UForm :schema="schema" :state="state" class="mt-8 flex flex-row flex-wrap lg:gap-4" @submit="onSubmit">
                <UFormField label="Name" name="name" class="mt-4 basis-full lg:basis-1/2 lg:flex-1">
                    <UInput v-model="state.name" class="w-full" /> 
                </UFormField>
                <UFormField label="Email" name="email" class="mt-4 basis-full lg:basis-1/2 lg:flex-1">
                    <UInput v-model="state.email" class="w-full" /> 
                </UFormField>
                <UFormField label="Message" name="message" class="mt-4 basis-full">
                    <UTextarea v-model="state.message" class="w-full " :rows="5" /> 
                </UFormField>
                <UButton type="submit" class="mt-8 justify-self-center self-center mx-auto">Get In Touch</UButton>
            </UForm>
        </UContainer>
    </section>
</template>