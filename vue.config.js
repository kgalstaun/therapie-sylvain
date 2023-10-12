const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/core/_variables.scss";
          @import "@/styles/core/_mixin.scss";
        `,
      },
    },
  },
});
