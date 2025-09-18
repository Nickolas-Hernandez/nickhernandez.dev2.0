import { defineCollection, defineContentConfig, z,  } from '@nuxt/content';

const createBaseSchema = () => z.object({
    title: z.string(),
    description: z.string(),
});

export default defineContentConfig({ 
    collections: { 
        projects: defineCollection({
            type: 'page',
            source: 'projects/*.md',
            schema: z.object({ 
                ...createBaseSchema,
                status: z.string(),
                featured: z.boolean(),
                client: z.string().optional(),
                // services
                // stack
                tags: z.array(z.string()).default([]),
                links: z.object({
                    live: z.string().url().optional(),
                    repo: z.string().url().optional()
                }),
                seo: z.object({
                    title: z.string().optional(),
                    desription: z.string().optional(),
                    // image: 
                })
            })
        })
    },
 });
