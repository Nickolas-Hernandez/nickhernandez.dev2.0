---
# schema: z.object({ 
#                 ...createBaseSchema,
#                 status: z.string(),
#                 featured: z.boolean(),
#                 client: z.string().optional(),
#                 // services
#                 // stack
#                 tags: z.array(z.string()).default([]),
#                 links: z.object({
#                     live: z.string().url().optional(),
#                     repo: z.string().url().optional()
#                 }),
#                 seo: z.object({
#                     title: z.string().optional(),
#                     desription: z.string().optional(),
#                     // image: 
#                 })
title: VueBalance
description: "A modern, responsive personal finance tracker built with Vue 3 and the Composition API. VueBalance lets users add,edit, and delete transactions, view their financial summary, and filter data — all"
status: "launched"
featured: false
client: "personal"
stack: ["Vue.js", "Tailwind"]
tags: []
links: 
    live: "https://nickolas-hernandez.github.io/vuebalance/" 
    repo: "https://github.com/Nickolas-Hernandez/vuebalance"
---

## Hello World