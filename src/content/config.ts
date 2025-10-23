import { defineCollection, z } from 'astro:content';

const articoliCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const pagineCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    order: z.number().optional(),
  }),
});

const eventiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    eventDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    heroImage: z.string().optional(),
    featured: z.boolean().optional(),
    registrationUrl: z.string().optional(),
  }),
});

export const collections = {
  'articoli': articoliCollection,
  'pagine': pagineCollection,
  'eventi': eventiCollection,
};
