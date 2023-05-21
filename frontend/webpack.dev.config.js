const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORT = 3000;
const NODE_MODULES_DIR = path.resolve(__dirname, "node_modules");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: `http://localhost:${PORT}/`,
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:js|jsx)$/,
        exclude: NODE_MODULES_DIR,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    watchFiles: ["src"],
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
};
