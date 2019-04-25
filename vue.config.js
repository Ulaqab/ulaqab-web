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
        target: "http://39.106.175.28:8001",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/api": "/api"
        }
      },
      "/img": {
        target: "http://39.106.175.28:8001",
        changeOrigin: true,
        pathRewrite: {
          "^/img": "/img"
        }
      }
    }
  },

  lintOnSave: undefined
};
