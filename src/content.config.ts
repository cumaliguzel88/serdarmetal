import { defineCollection, z } from 'astro:content';

const i18n = defineCollection({
  type: 'data',
  schema: z.record(z.any())
});

export const collections = {
  i18n
};
