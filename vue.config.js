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
        target: "http://172.31.100.217:9000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        }
      },
      "/img": {
        target: "http://172.31.100.217:9000",
        changeOrigin: true,
        pathRewrite: {
          "^/img": "/img"
        }
      }
    }
  },

  lintOnSave: undefined
};
