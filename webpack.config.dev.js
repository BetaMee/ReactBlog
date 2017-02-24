const path = require('path');
const webpack = require('webpack');
const APP_PATH = path.resolve(__dirname, './client/App-Client.jsx');
const autoprefixer = require('autoprefixer');


module.exports={
  entry:[
    'webpack-hot-middleware/client',//热加载中间件
     APP_PATH
  ],

  output:{
    path: path.resolve(__dirname,'client'),//与APP_PATH一致的文件目录
    filename: 'devClient.bundle.js',
    publicPath: '/'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{ 
          loader:'babel-loader',
          query: {
              presets: [ 'react-hmre' ]
          }
        },
       
<<<<<<< HEAD
=======
      },

      {
        test:/\.scss$/,
        exclude:/node_modules/,
        use:[
          'isomorphic-style-loader',
          {
            loader:'css-loader',
            options:{
              modules:true,//开启CSS Module
              localIdentName:`[name]__[local]-[hash:base64:5]`
            }
          },
          'sass-loader',//处理sass和scss文件
          {
            loader:  'postcss-loader',
            options:{
                plugins:function(){//这里配置postcss的插件
                  return [autoprefixer]
                }
            }
          }
        ]
>>>>>>> a40d69e38ba05d4de3bdf6d12cde9427642a1a9b
      }
    ]
  },

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		})
  ]
}


