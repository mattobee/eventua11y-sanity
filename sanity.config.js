import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {countryStateListPlugin} from 'sanity-plugin-country-state-select'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Eventua11y',

  projectId: '2g5zqxo3',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), countryStateListPlugin()],

  schema: {
    types: schemaTypes,
  },
})
