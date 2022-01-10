const path = require("path");
const webpack = require("webpack");

const regExpPatterns = ["a", "b"].map((locale) => locale + "(.json)?");

const regExpForLocales =
  regExpPatterns.length > 0
    ? // A regexp that matches only locales we want to bundle
      new RegExp("[/\](" + regExpPatterns.join("|") + ")$")
    : // A regexp that doesn’t match anything – per https://stackoverflow.com/a/2930280/1192426
      /\b\B/;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new webpack.ContextReplacementPlugin(/i18n/, regExpForLocales)],
  resolve: {
    extensions: [".js"],
  },
};
