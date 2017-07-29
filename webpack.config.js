var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'cheap-source-map',
	entry: [
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		moduleDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']	
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loaders: ['babel?presets[]=react,presets[]=es2015']
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
	
};