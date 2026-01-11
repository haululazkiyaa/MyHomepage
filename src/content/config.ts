import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    thumbnail: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    publishedDate: z.date(),
    readTime: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
