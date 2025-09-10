const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3001/",
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
        test: /\.(js|jsx)$/,    // handle JSX
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
    extensions: [".js", ".jsx"], // so imports don’t need extension
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "usersApp", // or productsApp, host
        filename: "remoteEntry.js",
        exposes: {
          "./UsersPage": "./src/UsersPage",
          "./UserDetailPage": "./src/UserDetailPage",
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
      template: "./public/index.html", // need to create this
    }),
  ],
};
