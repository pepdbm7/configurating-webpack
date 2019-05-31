const path = require("path"); //from Node.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/js/home.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000, //by default it's the 5000
    openPage: "/home.html" //to open direclty the homepage!
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
  },
  plugins: [
    //home page:
    new HtmlWebpackPlugin({
      filename: "home.html", //how we want to call the output file
      template: "src/home.html", //take template from this html (input)
      title: "Home" //if we want to change the tab title for every new html we see
    }),
    //about page:
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/about.html",
      title: "About"
    })
  ]
};
