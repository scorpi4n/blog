import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.strictObject({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.enum(["web dev", "IT"])),
		draft: z.boolean(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform(val => new Date(val)),
		updatedDate: z
			.string()
			.or(z.date())
			.optional()
			.transform(str => (str ? new Date(str) : undefined)),
	}),
});

export const collections = { blog };
