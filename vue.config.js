const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
        '/rest': {
            target: 'https://pa-muk.herokuapp.com',
            changeOrigin: true,
        }
    }
}
})
