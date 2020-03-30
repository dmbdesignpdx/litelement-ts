const path = require('path')


module.exports = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public/dist'),
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
