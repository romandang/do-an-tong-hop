const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

const pagesDir = "./src/app/pages/";
const templates = [];
let entries = {};

const items = fs.readdirSync(path.resolve(__dirname, pagesDir));

function resolve(str) {
  return path.resolve(__dirname, str);
}

items.forEach((item) => {
  const itemPath = path.resolve(__dirname, pagesDir, item);
  if (fs.lstatSync(itemPath).isDirectory()) {
    entries = {
      ...entries,
      [item]: path.resolve(itemPath, "index.js"),
    };
    templates.push(
      new HtmlWebpackPlugin({
        template: `${pagesDir}${item}/index.pug`,
        filename: `${item}.html`,
        chunks: [`${item}`],
        cache: false,
      })
    );
    templates.push(
      new webpack.ProvidePlugin({
        Promise: "es6-promise",
      })
    );
  }
});

module.exports = {
  entry: {
    ...entries,
  },
  stats: "errors-only",
  plugins: [...templates],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 3
          "css-loader", // 2
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // 3
          "css-loader", // 2
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          "sass-loader", // 1,
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        // exclude: /node_modules/,
        // exclude: /node_modules\/(?!(dom7|swiper|yt-player)\/).*/,
        options: {
          configFile: resolve("babel.config.js"),
        },
        include: [
          resolve("src"),
          resolve("node_modules/swiper"),
          resolve("node_modules/dom7"),
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
              publicPath: "/fonts",
            },
          },
        ],
      },
    ],
  },
};
