const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./index.js",
  },
  target: "node",
  mode: "production",
  node: {
    __filename: false,
    __dirname: false,
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".js", ".json", ".mjs"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "migrations"),
          path.resolve(__dirname, "seeds"),
          /knexfile.js/,
        ],
      },
    ],
  },
  externals: {
    sqlite3: "sqlite3",
    mysql2: "mysql2",
    mariasql: "mariasql",
    mysql: "mysql",
    oracle: "oracle",
    "strong-oracle": "strong-oracle",
    oracledb: "oracledb",
    "pg-query-stream": "pg-query-stream",
    mssql: "mssql",
    tedious: "tedious",
    "pg-native": "pg-native",
    "mssql/lib/base": "mssql/lib/base",
    "mssql/package.json": "mssql/package.json",
  },
  plugins: [ new CleanWebpackPlugin() ],
};
