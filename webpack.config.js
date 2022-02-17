const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    // list of extensions that has to be resolved automatically. With this options there is no need of adding file extension while importing
    extensions: [
      ".webpack.js",
      ".web.js",
      ".tsx",
      ".ts",
      ".js",
      ".json",
      ".scss",
      ".css",
      ".jsx"
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        // Fonts laoder
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader?name=./fonts/[name].[hash:6].[ext]"],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.(tsx|ts|jsx|js)?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        // Images loader
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader?name=./images/[name].[hash:6].[ext]"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputhPath: "imgs",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
