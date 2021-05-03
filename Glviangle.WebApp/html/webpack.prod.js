const path = require("path");
const fs = require("fs");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer = require("autoprefixer");

const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

const ENV = "prod.env";
const dotenv = require("dotenv").config({ path: __dirname + `/env/${ENV}` });

const pagesDir = "./src/app/pages/";
const items = fs.readdirSync(path.resolve(__dirname, pagesDir));

items.forEach((item) => {
  if (fs.lstatSync(path.resolve(__dirname, pagesDir, item)).isDirectory()) {
    // inlineScripts.push(item + ".js");
    // styleExtracts.push(
    //   new StyleExtHtmlWebpackPlugin({
    //     position: "body-top",
    //     chunks  : [item]
    //   })
    // );
  }
});

module.exports = () => {
  return merge(common, {
    mode: "production",
    output: {
      filename: "./js/[name].js",
      path: path.resolve(__dirname, "build"),
    },
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    },
    plugins: [
      new Dotenv({
        path: `./env/${ENV}`, // load this now instead of the ones in '.env'
        safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        defaults: false, // load '.env.defaults' as the default values if empty.
      }),
      new MiniCssExtractPlugin({ filename: "./css/[name].css" }),
      new CopyPlugin([
        { from: "src/assets/images", to: "./images" },
        // { from: "static", to: "./js" },
      ]),
      // ...styleExtracts,
      new ScriptExtHtmlWebpackPlugin({
        // inline: [...inlineScripts],
        custom: {
          test: /\.js$/,
          attribute: "type",
          value: "text/javascript",
        },
      }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader, // 3
            "css-loader", // 2
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            "sass-loader", // 1
          ],
        },
        {
          test: /\.(svg|png|jpg|gif|mp3|mp4|webp)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: (url, resourcePath, context) => {
                let IMG_PATH = dotenv.parsed.IMAGE_PATH;
                let output_folder = `./imgs/${url}`;
                if (IMG_PATH || IMG_PATH !== "") {
                  output_folder =
                    IMG_PATH +
                    resourcePath.replace(
                      context + "\\src\\assets\\images\\",
                      ""
                    );
                }
                return output_folder;
              },
              publicPath: (url, resourcePath, context) => {
                let output_path = `./imgs/${url}`;
                let IMG_PATH = dotenv.parsed.IMAGE_PATH;
                if (IMG_PATH || IMG_PATH !== "") {
                  output_path =
                    IMG_PATH +
                    resourcePath.replace(
                      context + "\\src\\assets\\images\\",
                      ""
                    );
                }

                return `${output_path.replace("\\", "/")}`;
              },
            },
          },
        },
        {
          test: /\.(js)$/,
          loader: "webpack-preprocessor-loader",
          options: {
            debug: false,
            directives: {
              secret: false,
            },
            params: {
              ENV: "production",
            },
            verbose: false,
          },
        },
      ],
    },
  });
};
