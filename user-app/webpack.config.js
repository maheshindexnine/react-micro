const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
    clean: true,
  },
  module: {
    rules: [
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
          "./UsersPage": "./src/UsersPage", // for users app
        },
        remotes: {
          usersApp: "usersApp@http://localhost:3001/remoteEntry.js", // only in host
          productsApp: "productsApp@http://localhost:3002/remoteEntry.js"
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          "react-dom": { singleton: true, eager: true, requiredVersion: false },
        },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // need to create this
    }),
  ],
};
