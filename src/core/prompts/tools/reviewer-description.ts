import { ToolArgs } from "./types"

// Note: Reviewer is not a core tool, but a workflow using execute_command.
// This description guides the AI on how to invoke it.
export function getReviewerDescription(_args: ToolArgs): string {
	const formattedExample = `
Example: Use Claude CLI to review a design document
<execute_command>
<command>cat .agent/arch_review_health_check.md | claude -p "You are acting as a reviewer. Read the provided file completely, think deeply about its contents, and perform the review task described within it." > .agent/arch_review_health_check_feedback.md</command>
</execute_command>
`
	// Combine the parts.
	const finalDescription = `## reviewer
Description: This tool facilitates code or design reviews by leveraging the Claude AI model. It is **not a standalone tool** but rather a **workflow pattern** that utilizes the \`execute_command\` tool to run a specific command involving the \`claude\` command-line interface (CLI). You will prepare a context file (typically in markdown format) with all necessary information for the review. Then, you will use \`execute_command\` to pipe this context file to the \`claude\` CLI, instructing it to perform the review. Claude will analyze the provided context and generate feedback.

**Context File Structure:**
Include the following information in your context file (e.g., \`.agent/review_request_myfeature.md\`):
\`\`\`
# Review Request
## Intent
[Describe what you need feedback on and why]

## Difficulty Level: [1-10]
[Lower numbers for straightforward tasks, higher numbers for complex tasks requiring deep thinking]

## Review Focus: [design|implementation|security|performance|general]
[Choose one focus area for the review]

## Additional Context
[Include any code, designs, or documents that need to be reviewed]

## Questions or Specific Areas of Concern
[List any specific questions or areas where you want focused feedback]
\`\`\`

Claude will read this file, think deeply according to the difficulty level, and focus on the specified area. The prompt in the command should be minimal, just telling Claude to act as a reviewer and follow the instructions in the file.

Parameters: The 'reviewer' pattern itself does not have direct parameters. Instead, you will use the parameters of the \`execute_command\` tool. The crucial part is constructing the correct command for \`execute_command\`.
Usage Format: To use the reviewer, you **MUST** use the \`execute_command\` tool. The \`<command>\` parameter within \`execute_command\` will typically involve using \`cat\` to output your context file and piping (\`|\`) it to the \`claude\` CLI, redirecting Claude's output to a feedback file. See the example below.

${formattedExample}

The Code and Architect roles should routinely use this tool to get feedback on their work.`

	return finalDescription
}
