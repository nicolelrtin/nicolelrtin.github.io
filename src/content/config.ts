import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()).optional(),
    }),
});

const booksCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        dateRead: z.date(),
        rating: z.number().min(1).max(5).optional(),
        cover: z.string().optional(),
    }),
});

const publicationsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        journal: z.string().optional(),
        pubDate: z.date(),
        link: z.string().url().optional(),
    }),
});

export const collections = {
    'pages': writingCollection,
    'shelf': booksCollection,
    'publications': publicationsCollection,
};
