const path = require('path');
//const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const MinifyPlugin = require("babel-minify-webpack-plugin");
//const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

console.log("Current ENV is: " + process.env.NODE_ENV);

//const PUBLIC_PATH = "/assets/dist/";

// TODO cache google fonts with service worker
// if change filename: remember to change reference to this file in _Root.cshtml
//const serviceWorkerFileName = "service-worker.js";

// const cleanOptions = {
//     root: path.resolve("../"),
//     verbose: true,
//     dry: false,
//     watch: true,
// }

// const pathsToClean = [
//     'assets/dist',
//     serviceWorkerFileName,
// ];

module.exports = [{
    entry: [
      './app/app.jsx'
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      alias: {
        HelloWorld: path.resolve(__dirname, 'app/components/HelloWorld.jsx'),
        HelloWorld1: path.resolve(__dirname, 'app/components/HelloWorld1.jsx'),
        Main: path.resolve(__dirname, 'app/components/Main.jsx')
      },
      extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
          }
        ]
      }
}]
