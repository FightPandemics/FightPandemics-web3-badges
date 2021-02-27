const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: {
    index: "./index.ts",
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
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
        },
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "migrations"),
          path.resolve(__dirname, "seeds"),
          /knexfile.ts/,
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
  plugins: [new CleanWebpackPlugin()],
}
