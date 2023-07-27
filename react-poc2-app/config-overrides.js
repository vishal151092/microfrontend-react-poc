const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;



module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...

  config.plugins.push(
    new ModuleFederationPlugin({
      filename: "remoteEntry",
      exposes: {
        SECOND_APP: "./src/App.tsx",
      },
    })
  )

  return config
}