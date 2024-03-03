const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
const REMOTE_APP1 = "remote@http://192.168.57.51:5501/remoteEntry.js";

module.exports = (_, argv) => ({


  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 5000,
    historyApiFallback: true,
    hot: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {},
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      runtime: false,
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: REMOTE_APP1,
      },
      exposes: {
        "./Module": "./src/index.ts",
        "./Header": "./src/components/Header.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new Dotenv(),
    new ExternalTemplateRemotesPlugin(),
  ],
});
