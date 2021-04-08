export default () => {
  children: [{ file: 'deconz.config.js', label: 'deconz', active: true }]
  main: {
    apiPort: process.env.PORT ?? 3000
  }
}
