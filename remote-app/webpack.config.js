const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => ({
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  optimization: {},
  devServer: {
    port: 5001,
    historyApiFallback: true,
    hot: false,
    // liveReload: "",
    // watchFiles: "",
  },
  output: {
    clean: true,
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
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
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {
        host: "host@http://localhost:5000/remoteEntry.js",
      },
      exposes: {
        "./Module": "/src/components/Main.tsx",
        "./Footer": "./src/components/Footer.tsx",
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
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: "remoteEntry.css",
    }),
  ],
});
