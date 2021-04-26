const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const mocks = require("./mocks");
const srcFolder = [path.resolve("src", "app")];
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devtool: "source-map",
  plugins: [
    new Dotenv({
      path: "./env/dev.env", // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false, // load '.env.defaults' as the default values if empty.
    }),
    new CopyPlugin([{ from: "./src/assets", to: "./assets" }]),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contentHash].[ext]",
            outputPath: "static",
          },
        },
      },
      {
        test: /\.js$/,
        enforce: "pre",
        include: srcFolder,
        options: {
          configFile: path.resolve(".eslintrc"),
          eslint: {
            configFile: path.resolve(__dirname, ".eslintrc"),
          },
        },
        loader: "eslint-loader",
      },
      {
        test: /\.(js)$/,
        loader: "webpack-preprocessor-loader",
        options: {
          debug: true,
          directives: {
            secret: false,
          },
          params: {
            ENV: "development",
          },
          verbose: false,
        },
      },
    ],
  },
  devServer: {
    port: 8080,
    host: "localhost",
    // host: "0.0.0.0",
    historyApiFallback: true,
    before: function (app) {
      mocks.forEach(function (api) {
        app[api.method.toLowerCase()](`/${api.param}`, api.callback);
      });
    },
  },
});
