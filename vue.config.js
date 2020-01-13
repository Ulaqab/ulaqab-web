module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "@/global-styles/colors.scss";
                    @import "@/global-styles/typography.scss";
                `
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.0.105:9000",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/api": "/api"
        }
      },
      "/img": {
        target: "http://192.168.0.105:9000",
        changeOrigin: true,
        pathRewrite: {
          "^/img": "/img"
        }
      }
    }
  },

  lintOnSave: undefined
};
