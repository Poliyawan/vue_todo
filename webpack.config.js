var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
//判断当前的环境是不是开发环境
//开发环境：开发环境时程序猿们专门用于开发的服务器，配置可以比较随意，为了开发调试方便，一般打开全部错误报告和测试工具，是最基础的环境
//生产环境： 生产环境是指正式提供对外服务的，一般会关掉错误报告，打开错误日志，是最重要的环境。
const isDev = process.env.NODE_ENV === 'development';

const config = {
    target:'web',
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
              test:/\.styl$/,
              use:[
                  "style-loader",
                  "css-loader",
                  {
                      loader:"postcss-loader",
                      options: {
                          sourceMap:true
                      }
                  },
                  "stylus-loader"
              ]
            },
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                      loader:"postcss-loader",
                        options: {
                          sourceMap:true
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test:/\.(jpg|png|gif|jpeg|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        //设置Loader的工作方式
                        options: {
                            //如果小于1024,则直接将图片转为代码写入
                            limit:1024,
                            //输出的名字以它原来的名字和格式
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
          //在vue/react的工作环境中，开发环境和production环境的vue员代码量是不一样的，可以根据不同的环境选择打包的代码
         //同时，在JS代码中也可以使用process.env.NODE_ENV这个变量
            new webpack.DefinePlugin({
                'process.env':{
                    NODE_ENV: isDev ? '"development"' : '"production"'
                }
            }),
            new htmlWebpackPlugin()
    ]
}

if (isDev){
    //在页面中进行调试，因为调试时是已经被编译过的代码并不是自己写的代码，所以需要工具来映射两个代码间的关系
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port:8000,
        host:'127.0.0.1',
        overlay:{
            //显示错误
            errors:true,
        },
        //改一个组件的代码，只会渲染这个组件的效果而不是重新渲染整个页面，刷新页面(热模块替换)
        hot:true
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;