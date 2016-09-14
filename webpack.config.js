var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.join(__dirname, "www"),
	devtool: 'inline-sourcemap',
	entry: "./index.js",
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread','transform-react-display-name']
				}
			},
			{
				test: /\.styl$/,
				include: path.join(__dirname, 'www'),
				loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	}
};
