
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');

var entries = getEntry('./app/src/**/*.js');
console.log(entries);
entries.index=__dirname + "/app/main.js";
module.exports = {
  devtool: 'eval-source-map',
  // entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  entry:entries,
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: '[name].js',//打包后输出文件的文件名
    chunkFilename: '[name].js',
    publicPath:''
  },
  module: {//在配置文件里添加JSON loader
   rules: [
     {
       test: /\.json$/,
       use: "json-loader"
     },
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:'babel-loader'
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:'file-loader'
      },
      {
        test: /\.css$/,
        use:[
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options:{
              modules:true
            }
          },
          // {
          //   loader:'postcss-loader',
          //   options: {
          //               plugins: function() {
          //               return [
          //               require('autoprefixer')
          //               ];
          //                 }
          //             }
          // }
        ]

      },
   ]
 },

 plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ],
  devServer: {
    // historyApiFallback: true,//不跳转
    // inline: true,//实时刷新
    hot:true,
    contentBase: path.resolve(__dirname, 'app'),
    publicPath: '/',
    port:8015
  }
}

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = basename; // 正确输出js和html的路径
    entries[pathname] = entry;
  });
  return entries;
}
