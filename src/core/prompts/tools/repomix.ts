import { ToolArgs } from "./types"

// Note: Repomix is not a core tool, but a workflow using execute_command.
// This description guides the AI on how to invoke it.
export function getRepomixDescription(_args: ToolArgs): string {
	const formattedExample = `
Example: Run repomix to get project overview
<execute_command>
<command>repomix . -o .agent/context.txt --include "**/*.ts,**/*.js" --compress --no-file-summary --no-directory-structure</command>
</execute_command>
`
	// Combine the parts.
	const finalDescription = `## repomix
Description: Use the \`repomix\` CLI tool (via \`execute_command\`) to gather broad codebase context. Essential for understanding project structure and dependencies before planning or implementation. Output should be directed to a file in \`.agent/\`.

  **Repomix Documentation:**
  \`\`\`
  Output Options
  -o, --output <file>: Specify the output file name
  --style <style>: Specify the output style (xml, markdown, plain)
  --parsable-style: Enable parsable output based on the chosen style schema. Note that this can increase token count.
  --compress: Perform intelligent code extraction, focusing on essential function and class signatures to reduce token count
  --output-show-line-numbers: Show line numbers in the output
  --copy: Additionally copy generated output to system clipboard
  --no-file-summary: Disable file summary section output
  --no-directory-structure: Disable directory structure section output
  --remove-comments: Remove comments from supported file types
  --remove-empty-lines: Remove empty lines from the output
  --header-text <text>: Custom text to include in the file header
  --instruction-file-path <path>: Path to a file containing detailed custom instructions
  --include-empty-directories: Include empty directories in the output
  --no-git-sort-by-changes: Disable sorting files by git change count (enabled by default)
  Filter Options
  --include <patterns>: List of include patterns (comma-separated). Note, only a single include pattern is supported, so multiple patterns must be combined with commas.
  -i, --ignore <patterns>: Additional ignore patterns (comma-separated)
  --no-gitignore: Disable .gitignore file usage
  --no-default-patterns: Disable default patterns
  \`\`\`
Parameters: None specific to 'repomix' itself. Use the parameters of \`execute_command\`.
Usage Format: Use the \`execute_command\` tool structure.

${formattedExample}`

	return finalDescription
}
