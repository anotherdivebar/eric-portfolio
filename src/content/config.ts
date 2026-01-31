import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    impact: z.string(),
    bullets: z.array(z.string()),
    scope: z.string(),
    ownership: z.string(),
    order: z.number().default(0)
  })
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).default([])
  })
});

const technicalProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    why: z.string(),
    constraints: z.array(z.string()),
    stack: z.array(z.string()),
    decisions: z.array(z.string()),
    tradeoffs: z.array(z.string()),
    outcome: z.string(),
    order: z.number().default(0)
  })
});

export const collections = {
  "case-studies": caseStudies,
  blog,
  "technical-projects": technicalProjects
};
