var path = require('path');
var webpack = require('webpack');
var APP_PATH = path.resolve(__dirname, './client/App-Client.jsx');
var BUILD_PATH = path.resolve(__dirname, './server/public/js');


module.exports={
  entry:[
    // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
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
    ]
  },

  plugins:[
     
  ]
}


