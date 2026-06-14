import { Mastra } from '@mastra/core'
import { PinoLogger } from '@mastra/loggers'
import { LibSQLStore } from '@mastra/libsql'
import { notes } from './mcp/server'

export const mastra = new Mastra({
  storage: new LibSQLStore({
    id: 'mastra-storage',
    url: 'file:/Users/IF658094/vector-db/research-assistant/vector.db',
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
  mcpServers: {
    notes,
  },
})
