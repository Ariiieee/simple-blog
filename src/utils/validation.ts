import { z } from "zod";
export const ArticleSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name must be at least 2 characters long",
		})
		.max(50, {
			message: "Name must be less than 50 characters long",
		}),
	email: z.string().email({
		message: "Invalid email",
	}),
	body: z
		.string()
		.min(10, {
			message: "Body must be at least 10 characters long",
		})
		.max(500, {
			message: "Body must be less than 500 characters long",
		}),
});
