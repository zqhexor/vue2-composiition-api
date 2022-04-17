const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default
const AutoImport = require('unplugin-auto-import/webpack')

module.exports = {
    lintOnSave: 'warning',
    parallel: false,  // disable thread-loader, which is not compactible with this plugin
    configureWebpack: {
      plugins: [
        ScriptSetup({ /* options */ }),
        AutoImport({
          imports: ['@vue/composition-api']
        })

      ]
    }
  }
