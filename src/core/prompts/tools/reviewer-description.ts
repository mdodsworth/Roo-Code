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
Description: Use the Claude CLI (via \`execute_command\`) to perform code or design reviews of your work. The context file should contain all necessary information, and Claude will analyze it and provide feedback.

**Context File Structure:**
Include the following information in your context file:
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

Parameters: None specific to 'reviewer' itself. Use the parameters of \`execute_command\`.
Usage Format: Use the \`execute_command\` tool structure.

${formattedExample}

The Code and Architect roles should routinely use this tool to get feedback on their work.`

	return finalDescription
}
