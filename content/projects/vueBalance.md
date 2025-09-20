---
title: VueBalance
description: "A modern, responsive personal finance tracker built with Vue 3 and the Composition API. VueBalance lets users add, edit, and delete transactions, view their financial summary, and filter data."
status: launched
featured: false
client: personal
stack: 
  - Vue.js
  - Tailwind CSS
  - TypeScript
tags: 
  - finance
  - productivity
  - portfolio
links:
  live: "https://nickolas-hernandez.github.io/vuebalance/"
  repo: "https://github.com/Nickolas-Hernandez/vuebalance"
---

# VueBalance

<ProjectMeta
  status="launched"
  client="personal"
  :stack="['Vue.js','Tailwind CSS','TypeScript']"
  :tags="['finance','productivity','portfolio']"
/>

<LinkButtons
  live="https://nickolas-hernandez.github.io/vuebalance/"
  repo="https://github.com/Nickolas-Hernandez/vuebalance"
/>

<UAlert class="my-6" title="What is this?" color="primary" variant="subtle">
  VueBalance is a personal finance tracker built with <strong>Vue 3</strong> + <strong>TypeScript</strong>.
  It demonstrates clean component architecture, reactivity patterns, and a modern UI with Tailwind.
</UAlert>

## ✨ Features

<FeatureList :items="[
  'Add, edit, and delete transactions',
  'Track income vs. expenses with a running total',
  'Filter transactions by type/date',
  'Responsive UI built with Tailwind CSS',
  'Local storage persistence'
]" />

## 🧩 Live Demo (mini)

<ClientOnly>
  <DemoBalance class="my-6" />
</ClientOnly>

## 🛠️ Tech Stack

<TechBadges :items="['Vue 3','TypeScript','Tailwind CSS','Vite']" />

## 📸 Screens

<ImageRow :images="[
  { src: '/images/vuebalance/summary.png', alt: 'Summary view' },
  { src: '/images/vuebalance/transactions.png', alt: 'Transactions table' }
]" />

## 🔗 Links

- [Live Demo](https://nickolas-hernandez.github.io/vuebalance/)
- [Source Code](https://github.com/Nickolas-Hernandez/vuebalance)