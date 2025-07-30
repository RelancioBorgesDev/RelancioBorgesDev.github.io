import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      github_link: z.string(),
      web_link: z.string(),
      categories: z.array(z.string()),
      year: z.string(),
      banner_image: image(),
      banner_video: image(),
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
