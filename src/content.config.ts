import { defineCollection, z } from 'astro:content'; // Removed glob import

const blog = defineCollection({
	// Type-check frontmatter using a schema
	// Astro automatically loads files from src/content/blog/ and generates slugs
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
