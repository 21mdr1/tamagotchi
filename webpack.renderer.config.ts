import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
// });

// rules.push({
//   test: /\.(png|jpe?g|gif|svg)$/i,
//   type: 'asset/resource',
// });

// rules.push({
//   test: /\.s[ac]ss$/i,
//   use: [
//     "style-loader",
//     "css-loader",
//     "sass-loader",
//   ],
// });

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
  },
  devtool: "nosources-source-map",
};
