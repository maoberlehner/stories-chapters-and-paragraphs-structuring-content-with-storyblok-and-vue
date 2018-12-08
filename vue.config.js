const nodeSassMagicImporter = require(`node-sass-magic-importer`);

const PREVIEW_TOKEN = `rEtw2gsw1NnpczYfZU7WKAtt`;
const PUBLIC_TOKEN = `PMeHFWCh3odBMAWDbTGOUQtt`;

process.env.VUE_APP_ACCESS_TOKEN = process.env.STORYBLOK_BRIDGE ? PREVIEW_TOKEN : PUBLIC_TOKEN;
process.env.VUE_APP_STORYBLOK_BRIDGE = process.env.STORYBLOK_BRIDGE;

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
};
