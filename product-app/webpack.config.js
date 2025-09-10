const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3002/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag"
            }
          },
          "css-loader", 
          "postcss-loader"
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "productsApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsPage": "./src/ProductPage",
      },
      shared: { 
        react: { 
          singleton: true, 
          eager: true, 
          requiredVersion: false,
          strictVersion: false
        }, 
        "react-dom": { 
          singleton: true, 
          eager: true, 
          requiredVersion: false,
          strictVersion: false
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: false,
          strictVersion: false
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
