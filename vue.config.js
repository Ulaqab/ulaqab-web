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
        target: "https://ulanqab.fun:8001",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/api": "/api"
        }
      },
      "/img": {
        target: "https://ulanqab.fun:8001",
        changeOrigin: true,
        pathRewrite: {
          "^/img": "/img"
        }
      }
    }
  },

  lintOnSave: undefined
};
