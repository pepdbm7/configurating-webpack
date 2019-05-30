const path = require("path"); //from Node.js

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    //loaders:
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, //bc we don't want to transpile this
        use: {
          loader: "babel-loader", //to communicate babel with webpack
          options: {
            presets: ["es2015"]
          }
        }
      }
    ]
  }
};
