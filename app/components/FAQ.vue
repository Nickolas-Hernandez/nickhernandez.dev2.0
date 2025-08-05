<script setup lang="ts">
import { UAccordion } from '#components'
import type { TabsItem, AccordionItem } from '@nuxt/ui'

const items = ref<TabsItem[]>([
  {
    label: 'Services & Process',
    content: 'Services and process content goes here.',
    slot: 'services' as const
  },
  {
    label: 'Pricing & Timelines',
    content: 'Pricing and timelines content goes here.',
    slot: 'pricing' as const
  },
  {
    label: 'About Me',
    content: 'about content goes here.',
    slot: 'about' as const
  }
])

const serviceQuestions = ref<AccordionItem[]>([
  {
    label: 'What kind of websites do you build?',
    content: 'I create custom business websites, eCommerce platforms, and AI-enhanced solutions that are designed to drive real results. Whether you need a content-rich blog, a lead-generating business site, or a Shopify store, I tailor each project to your goals.',
    trailingIcon: 'i-lucide-plus'
  },
  {
    label: 'How does your development process work?',
    content: 'My process is collaborative and transparent. It usually starts with a strategy call to understand your goals, followed by design and development phases. I keep you updated at every step, and once the site is launched, I provide ongoing support if needed.',
    trailingIcon: 'i-lucide-plus'
  },
  {
    label: 'Do you offer AI-powered solutions?',
    content: 'Yes. I build AI-driven features like chatbots, AI agents, and smart integrations to help automate tasks and improve user experiences. These can be added to your website or included as part of a new build.',
    trailingIcon: 'i-lucide-plus'
  },
  {
    label: 'Do you provide hosting and maintenance?',
    content: 'Yes — I offer managed WordPress hosting and ongoing maintenance plans. This includes server setup, updates, security monitoring, and performance optimization so your site runs smoothly and securely. My goal is to give you peace of mind by handling the technical details while you focus on your business.',
    trailingIcon: 'i-lucide-plus'
  }
])

const pricingQuestions = ref<AccordionItem[]>([
  {
    label: 'How much does a project cost?',
    content: 'Project costs vary based on complexity and features. I offer custom quotes after discussing your specific needs. Generally, simple sites start around $2,000, while more complex projects can range from $5,000 to $20,000+ depending on functionality and design requirements.',
    trailingIcon: 'i-lucide-plus'
  },
  {
    label: 'How do you structure payments?',
    content: 'I typically require a 50% deposit to start work, with the remaining balance due upon project completion. For larger projects, I can set up milestone payments based on deliverables. This ensures you only pay for work that meets your expectations.',
    trailingIcon: 'i-lucide-plus'
  },
  {
    label: 'What’s the usual turnaround time for a project?',
    content: 'Turnaround times depend on project scope. A simple website can be completed in 2-4 weeks, while larger projects may take 2-4 months or more. I provide estimated timelines during the initial consultation and keep you updated throughout the process.',
    trailingIcon: 'i-lucide-plus'
  },
  {
    label: 'Can you provide ongoing support after launch?',
    content: 'Absolutely! I offer ongoing support and maintenance plans to ensure your site remains secure, up-to-date, and performing well. This includes regular backups, security monitoring, and performance optimization so you can focus on your business without worrying about technical issues.',
    trailingIcon: 'i-lucide-plus'
  }
])

const aboutQuestions = ref<AccordionItem[]>([
  {
    label: 'What excites you most about your work?',
    content: 'What excites me most is turning ideas into functional, beautiful digital products that make a real impact for businesses. I enjoy combining creativity and technical skill to build websites and AI solutions that not only look great but also help clients achieve measurable results.',
    trailingIcon: 'i-lucide-plus'
  },
  {
    label: 'How do you stay focused when working on projects?',
    content: 'I practice deep work principles — dedicating distraction‑free time blocks to each project so I can give it my full attention. This approach allows me to work with clarity and precision, stay on schedule, and deliver results that truly align with each client’s goals.',
    trailingIcon: 'i-lucide-plus'
  },
  {
    label: 'What are your hobbies outside of work?',
    content: 'Outside of coding, I train Brazilian Jiu‑Jitsu, which keeps me disciplined and focused. I’m also passionate about health and fitness, especially mobility work and nutrition. When I’m not on the mat or building websites, I enjoy reading on topics like productivity, technology, and personal growth.',
    trailingIcon: 'i-lucide-plus'
  }
])

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0 text-base',
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60 text-base',
  trigger: 'px-3 py-2 rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted text-base',
  label: 'truncat text-base'
}

const accordianUI = {
    trigger: 'text-base',
    body: 'text-base text-pretty opacity-75',
}
</script>

<template>
    <section id="faq" class="pt-24">
        <UContainer>
            <h2 class="text-xl sm:text-2xl">Frequently Asked Questions</h2>
            <p class="text-sm opacity-75 mt-4">Quick Q&amp;As about my services and how I work.</p>
            <UTabs :items="items" class="mt-4" :ui >
                <template #services>
                    <UAccordion :items="serviceQuestions" class="mt-4 text-lg" :ui="accordianUI" />
                </template>
                <template #pricing>
                    <UAccordion :items="pricingQuestions" class="mt-4 text-lg" :ui="accordianUI" />
                </template>
                <template #about>
                    <UAccordion :items="aboutQuestions" class="mt-4 text-lg" :ui="accordianUI" />
                </template>
            </UTabs>   
        </UContainer>
    </section>
</template>