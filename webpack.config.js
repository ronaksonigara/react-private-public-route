var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    symlinks: true
  },
  externals: {
    react: "commonjs react",
    "react-router-dom": "react-router-dom"
  },
  optimization: {
    minimize: true
  }
};
