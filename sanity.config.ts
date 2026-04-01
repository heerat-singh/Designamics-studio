import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { deskStructure } from './structure/deskStructure'

export default defineConfig({
  name: 'designamics-studio',
  title: 'Designamics & City Builders',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '6q7y4uqu',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],

  schema: {
    types: schemaTypes,
  },
})
