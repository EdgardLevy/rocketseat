module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public"
  },
  module: {
    /*define como o webpack deve se comportar quando o usuario adicionar novos js*/
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
