const MonacoLocalesPlugin = require('monaco-editor-locales-plugin')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    overlay: false,
    proxy: {
      '/contents': { 
        target: 'http://ryugod.com:5000',
        changeOrigin: true
      },
      '/shareMySource': { 
        target: 'http://ryugod.com:5000',
        changeOrigin: true
      }
    }
  },
/*
  transpileDependencies: [
    'vuetify',
    'monaco-editor',
    'xterm',
    'xterm-addon-fit',
    'axios'
  ],
*/
  chainWebpack: config => {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ['html']
        //'monaco-editor/esm/vs/language/html/htmlWorker':'monaco-editor/esm/vs/language/html/htmlWorker',
      }
    ])
  },
  configureWebpack: {
    plugins: [
       new MonacoLocalesPlugin({  
          languages: ['en', 'ko'],
          defaultLanguage: "ko",
          logUnmatched: false,
          mapLanguages: {"ko": {
            "Convert Indentation to Spaces": "들어쓰기를 공백으로 변환", 
            "Convert Indentation to Tabs": "들여쓰기를 탭으로 변환",
            "Command Palette": "명령 팔레트",
            "Indent Using Spaces":"들여쓰기에 공백 사용",
            "Indent Using Tabs":"들여쓰기에 탭 사용",
            "Toggle Fold":"접기 토글",
          }}
      })
     ]
   },
}
