const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
  },
  plugins: [
    new HTMLPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
