const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    'bundles/app.bundle': ['./app/app.js'],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    fallback: {
      fs: false, // face-api.js
    },
  },
  output: {
    path: __dirname + '/docs',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[name].[ext]',
              // outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            // TODO revert, fix bug https://github.com/sveltejs/svelte-loader/issues/139
            // emitCss: true,
            hotReload: process.env.NODE_ENV === 'development',
            hotOptions: {
              noPreserveState: true,
            },
          },
        },
      },
      // {
      //   test: /node_modules\/svelte\/.*\.mjs$/,
      //   resolve: {
      //     fullySpecified: false, // load Svelte correctly
      //   },
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // esModule: true,
              // publicPath: (resourcePath, context) => {
              //   return path.relative(path.dirname(resourcePath), context) + '/';
              // },
            },
          },
          {
            loader: 'css-loader',
            options: {
              // esModule: true,
            },
          },
        ],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devtool: prod ? false : 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'docs'),
    // proxy: {
    //   '/': 'http://localhost:3000',
    // },
  },
};
