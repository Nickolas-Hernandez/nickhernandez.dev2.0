import { defineCollection, defineContentConfig, z,  } from '@nuxt/content';

const createBaseSchema = () => z.object({
    title: z.string(),
    description: z.string(),
});

export default defineContentConfig({ 
    collections: { 
        projects: defineCollection({
            type: 'page',
            source: { include: 'projects/*.md', prefix: '/projects' },
            schema: z.object({ 
                ...createBaseSchema,
                status: z.enum(['planned', 'in-progress', 'launched', 'archived']).default('launched'),
                featured: z.boolean().default(false),
                client: z.string().optional(),
                // services
                stack: z.array(z.string()).default([]),
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
