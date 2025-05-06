import { AIToolDefinition } from "./types"

// This is kept for backward compatibility, but the reviewer tool now
// recommends using execute_command directly to invoke Claude CLI
export const reviewerTool: AIToolDefinition = {
	name: "reviewer",
	description: "Conducts code or design reviews using Claude CLI. Use execute_command instead for direct invocation.",
	parameters: {
		type: "object",
		required: ["context_file_path", "output_file_path"],
		properties: {
			context_file_path: {
				type: "string",
				description: "Path to the file containing context for the review",
			},
			difficulty: {
				type: "integer",
				description: "Rating from 1-10 indicating the perceived difficulty/complexity of what's being reviewed",
				minimum: 1,
				maximum: 10,
			},
			review_focus: {
				type: "string",
				description:
					"Areas to focus on in the review. Can be: 'design', 'implementation', 'security', 'performance', or 'general'",
				enum: ["design", "implementation", "security", "performance", "general"],
			},
			output_file_path: {
				type: "string",
				description: "Path where the review feedback will be written",
			},
		},
	},
}
