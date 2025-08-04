<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const items = ref<TabsItem[]>([
  {
    label: 'Services & Process',
    content: 'Services and process content goes here.'
  },
  {
    label: 'Pricing & Timelines',
    content: 'Pricing and timelines content goes here.'
  },
  {
    label: 'About Me',
    content: 'about content goes here.'
  }
])

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0',
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60',
  trigger: 'px-3 py-2 rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted',
  label: 'truncate'
}
</script>

<template>
    <section class="mb-24">
        <UContainer>
            <h2 class="text-xl sm:text-2xl">FAQs</h2>
            <p class="text-sm opacity-75 mt-4">Quick Q&amp;As about my services and how I work.</p>
            <UTabs :items="items" class="mt-4" :ui />   
        </UContainer>
    </section>
</template>