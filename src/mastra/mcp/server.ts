import { MCPServer } from '@mastra/mcp'
import { resourceHandlers } from './resources'
import { writeNoteTool } from '../tools/write-note'
import { promptHandlers } from './prompts'

export const notes = new MCPServer({
  id: 'notes',
  name: 'Notes Server',
  version: '0.1.0',
  // Resources are the data that your server provides to clients.
  resources: resourceHandlers,
  // Prompts are the templates that LLMs can use to generate content.
  prompts: promptHandlers,
  // Tools are automatic calls by LLMs to perform specific actions.
  tools: {
    write: writeNoteTool,
  },
})
