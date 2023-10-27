module.exports = {
  productionSourceMap: false,
  devServer: {
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: 'http://192.168.0.76:8980',
    //     changeOrigin: true,
    //     ws: true,
    //     logLevel: 'debug'
    //   }
    // }
    proxy:{
      "/api":{
        host: 'localhost',   //本机ip
        changeOrigin: true,   //允许跨域
        target: process.env.VUE_APP_BASE_API,  //代理服务器地址
        port: 8080,   //本机端口
        https: false,
        pathRewrite:{   // 忽略api前缀，将'/api'替换成''
          '^/api': '',
        },
        ws: true,
      }
    },
    headers:{
      'Access-Control-Allow-Origin':'*'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },

  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }]
    },
    performance: {
      hints: false
    }
  }
}