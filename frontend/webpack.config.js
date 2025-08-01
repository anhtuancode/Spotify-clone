const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  // your entry/output/etc
  plugins: [
    new CaseSensitivePathsPlugin(),
  ],
};