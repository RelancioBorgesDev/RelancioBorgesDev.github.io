import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      categories: z.array(z.string()),
      year: z.string(),
      image: image(),
      langs: z.array(
        z.object({
          icon: z.string().optional(),
          lang: z.string(),
        })
      ),
    }),
});

export const collections = {
  projects,
};
