import * as path from "path";
import { Configuration } from "webpack";

const rootPath = path.resolve(__dirname, "..");

const config: Configuration = {
   resolve: {
      extensions: [".tsx", ".ts", ".js"],
   },
   devtool: "source-map",
   entry: {
      "main": {
         import: path.resolve(rootPath, "src/main", "main.ts"),
         /*dependOn: [ "preload" ],*/
      },
      /*"preload": path.resolve(rootPath, "src/main", "preload.ts"),*/
   },
   target: "electron-main",
   module: {
      rules: [
         {
            test: /\.(js|ts|tsx)$/,
            exclude: /node_modules/,
            include: /src/,
            use: {
               loader: "ts-loader",
            },
         },
      ],
   },
   node: {
      __dirname: false,
   },
   output: {
      path: path.resolve(rootPath, "dist"),
      filename: "[name].js",
   },
};

export default config;
