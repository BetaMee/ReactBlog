var path = require('path');
var webpack = require('webpack');
var APP_PATH = path.resolve(__dirname, './client/App-Client.jsx');
var BUILD_PATH = path.resolve(__dirname, './server/public/js');


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
		// new CopyWebpackPlugin([
		// 	{
		// 		from: path.resolve(__dirname, 'src', 'assets'),
		// 		to: path.resolve(__dirname, 'dist', 'assets')
		// 	}
		// ]),
  ]
}


