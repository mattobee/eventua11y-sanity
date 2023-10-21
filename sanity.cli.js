import {defineConfig} from 'sanity'

// export default defineCliConfig({
//   api: {
//     projectId: '2g5zqxo3',
//     dataset: 'production'
//   }
// })

export default defineConfig([
  {
    projectId: '2g5zqxo3',
    dataset: 'production',
    name: 'production-workspace',
    basePath: '/production',
  },
  {
    projectId: '2g5zqxo3',
    dataset: 'test',
    name: 'test-workspace',
    basePath: '/test',
  }
])