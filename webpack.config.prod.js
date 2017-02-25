var path = require('path');
var webpack = require('webpack');
var APP_PATH = path.resolve(__dirname, './client/App-Client.jsx');
var BUILD_PATH = path.resolve(__dirname, './server/public/assets');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将所有CSS文件打包
const autoprefixer = require('autoprefixer');

module.exports={
  entry:[
    APP_PATH
  ],

  output:{
    path: BUILD_PATH,
    filename: 'client.bundle.js',
    publicPath: '/assets/'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use: [
          'babel-loader',
        ]
      },

      {
        test:/\.css$/,
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
                  
                  // {
                  //   loader:  'sass-loader',//处理sass和scss文件
                  // },
            
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
      },
      {//处理图片
         test: /\.(png|jpg|gif|webp')$/,
        //  include:path.resolve(__dirname,'/client/assets'),
         use:[{
           loader:'url-loader',
           options:{
             limit:10000,
             //这个是输出的图片文件，跟output一致,生成的是bundleImg目录下的图片文件
             name:`bundleImg/[hash:8].[name].[ext]`,
           }
         }]
      },

      {//处理文字
         test: /\.(woff|ttf|svg|eot|woff2)$/,
        //  include:path.resolve(__dirname,'/client/assets'),
         use:[
           {
            loader:'url-loader',
              options:{
              limit:10000,  
              name:'bundleFonts/[hash:8]-[name].[ext]'
           }
         }]
      },
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


