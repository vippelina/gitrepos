var webpack = require("webpack")

module.exports = {
	devTool: 'eval-cheap-module-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/client/entry'
	],// all modules are loaded upon startup and the last one is exported
	output: {
		path: __dirname +'/public/js',
		filename: 'app.js',
		publicPath: 'http://localhost:8080/js/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{ test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'}
		]
	}

}
