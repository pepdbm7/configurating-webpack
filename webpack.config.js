const path = require("path"); //from Node.js

module.exports = {
  entry: {
    home: "./src/js/home.js",
    about: "./src/js/about.js"
  },
  output: {
    filename: "[name].bundle.js",
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
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/, //regex to include code of node_modules inside commons
          name: "common",
          chunks: "all"
        }
      }
    }
  }
};
