import { DiffStrategy } from "../../../shared/tools"
import { McpHub } from "../../../services/mcp/McpHub"

export type ToolArgs = {
	cwd: string
	supportsComputerUse: boolean
	diffStrategy?: DiffStrategy
	browserViewportSize?: string
	mcpHub?: McpHub
	toolOptions?: any
}

export interface AIToolDefinition {
	name: string
	description: string
	parameters: {
		type: string
		required?: string[]
		properties: Record<string, any>
	}
}
