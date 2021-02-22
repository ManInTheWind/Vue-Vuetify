
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : './'

const path = require("path");
const resolve = dir => path.join(__dirname,dir);

module.exports = {
  publicPath:BASE_URL,
  transpileDependencies: [
    'vuetify'
  ]
}
