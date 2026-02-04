const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = (_, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: path.resolve(__dirname, "src/index.tsx"),

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/[name].js",
      assetModuleFilename: "assets/[hash][ext]",
      clean: true,
      publicPath: "/"
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    devtool: isProd ? "source-map" : "eval-cheap-module-source-map",

    devServer: {
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true, 
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.(css|scss)$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),

        new Dotenv(),
    ],

    optimization: {
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: "single",
    },
  };
};
