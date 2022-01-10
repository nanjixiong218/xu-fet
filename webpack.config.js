const ShebangPlugin = require('webpack-shebang-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  target: "node", // 很关键
  node: false,
  entry: {
    bin: './src/bin.ts',
    lib: './src/index.ts',
  }, 
  // devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // library: {
    //   type: 'commonjs'
    // }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new ShebangPlugin(),
    // TODO: shelljs 需要需要这个文件，垃圾啊
    new CopyPlugin({
      patterns: [{ from: './node_modules/shelljs/src/exec-child.js', to: '' }]
    })
  ]
}