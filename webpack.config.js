const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
  
    entry: path.resolve(__dirname, './src/index.js'),
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    stats: { children: false },
    resolve: {
       
        alias: {
            //'vue$': 'vue/dist/vue.esm.js' ,
            vuex: 'vuex/dist/vuex.esm.js'
        },
        extensions: ['.js', '.vue']
    },
    devServer: {
      contentBase: "./dist",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true,//实时刷新
    } ,
    module: {
        
        rules: [
             {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[hash:8]-[name].[ext]',
                    outputPath: './images'
                }
            }]
        },
        {
            test: /\.(ttf|svg|eot|woff|woff2)$/,
            use: ['url-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },
        { 
            test: /\.vue$/, 
            use: 'vue-loader'
        }
      ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/index.html'),
          inject: true
        })
    ],
    //optimization与entry/plugins同级
    optimization: {
        splitChunks: {
          chunks: 'initial',
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: 1
            }
          }
        },
        runtimeChunk: {
          name: entrypoint => `manifest.${entrypoint.name}`
        }
      }
  }