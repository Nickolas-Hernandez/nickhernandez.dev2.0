import { defineCollection, defineContentConfig, z } from '@nuxt/content';

const createBaseSchema = () => z.object({
    title: z.string(),
    description: z.string(),
});

export default defineContentConfig({ 
    collections: { 
        index: defineCollection({
            type: 'page',
            source: 'index.yml',
            schema: z.object({
                
            })
        })
    },
 });
