import { defineCollection, defineContentConfig, z,  } from '@nuxt/content';

export default defineContentConfig({ 
    collections: { 
        content: defineCollection({
            type: 'page',
            source: '**/*.md'
        }),
        projects: defineCollection({
            type: 'page',
            source: 'projects/**',
            schema: z.object({ 
                status: z.enum(['planned', 'in-progress', 'launched', 'archived']).default('launched'),
                featured: z.boolean().default(false),
                client: z.string().optional(),
                stack: z.array(z.string()).default([]),
                tags: z.array(z.string()).default([]),
                links: z.object({
                    live: z.string().url().optional(),
                    repo: z.string().url().optional()
                }),
                seo: z.object({
                    title: z.string().optional(),
                    description: z.string().optional(),
                })
            })
        }),
        docs: defineCollection({
            type: 'page',
            source: 'docs/**'
        }),
    },
 });
