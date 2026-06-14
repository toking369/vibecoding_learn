import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const phases = defineCollection({
  loader: glob({ pattern: 'zh/phases/**/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    phase: z.number(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

const intro = defineCollection({
  loader: glob({ pattern: 'zh/intro/**/*.mdx', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

const setup = defineCollection({
  loader: glob({ pattern: 'zh/setup/**/*.mdx', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: 'zh/cases/**/*.mdx', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { phases, intro, setup, cases };
