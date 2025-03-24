import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      projectType: z.string(),
      github_link: z.string(),
      web_link: z.string(),
      video: z.string(),
      tags: z.array(z.string()),
      date: z.date(),
      card_image: image(),
      featured: z.boolean(),
    }),
});

const projectsVirtua = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      projectType: z.string(),
      web_link: z.string(),
      video: z.string(),
      tags: z.array(z.string()),
      date: z.date(),
      card_image: image(),
    }),
});
const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      date: z.date(),
      card_image: image(),
      banner_image: image(),
      featured: z.boolean(),
    }),
});

export const collections = {
  project: projectCollection,
  post: postCollection,
  projectsVirtua: projectsVirtua
};
