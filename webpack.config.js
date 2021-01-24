const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {	
	  entry: {
		api: './src/api.js' 
	  },
	  plugins: [
		new CleanWebpackPlugin()
	  ],
	  devtool: 'inline-source-map',
	  output: {
	    filename: '[name].js',
	    path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	  },
	  target: 'node',
	  node: {
	    // Need this when working with express, otherwise the build fails
	    __dirname: false,   // if you don't put this is, __dirname
	    __filename: false,  // and __filename return blank or /
	  },
	  externals: [nodeExternals()],
  };
