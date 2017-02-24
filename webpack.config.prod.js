var path = require('path');
var webpack = require('webpack');
var APP_PATH = path.resolve(__dirname, './client/App-Client.jsx');
var BUILD_PATH = path.resolve(__dirname, './server/public/js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将所有CSS文件打包
const autoprefixer = require('autoprefixer');

module.exports={
  entry:[
    APP_PATH
  ],

  output:{
    path: BUILD_PATH,
    filename: 'client.bundle.js',
    publicPath: '/'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use: [
          'babel-loader',
        ]
<<<<<<< HEAD
=======
      },

      {
        test:/\.scss$/,
        use:ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                  {
                    loader:'css-loader',
                    options:{
                      modules:true,//开启CSS Module
                      localIdentName:`[name]__[local]-[hash:base64:5]`
                    }
                  },
                  
                  {
                    loader:  'sass-loader',//处理sass和scss文件
                  },
            
                  {
                    loader:  'postcss-loader',
                    options:{
                        plugins:function(){//这里配置postcss的插件
                          return [autoprefixer]
                        }
                    }
                  }
              ]
        })          
>>>>>>> a40d69e38ba05d4de3bdf6d12cde9427642a1a9b
      }
    ]
  },

  plugins:[
    new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
    new ExtractTextPlugin('bundle.css')
		// new CopyWebpackPlugin([
		// 	{
		// 		from: path.resolve(__dirname, 'src', 'assets'),
		// 		to: path.resolve(__dirname, 'dist', 'assets')
		// 	}
		// ]),
  ]
}


