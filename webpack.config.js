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
    filename: 'client.bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use: [
          // 'react-hot-loader',
          'babel-loader',
        ]
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
  ]
}


