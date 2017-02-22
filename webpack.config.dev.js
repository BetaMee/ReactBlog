var path = require('path');
var webpack = require('webpack');
var APP_PATH = path.resolve(__dirname, './client/App-Client.jsx');


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
       
      },

      {
        test:/\.css$/,
        exclude:/node_modules/,
        use:[
          'style-loader',
          'css-loader'
        ]
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


