const path = require('path')
const webpack = require('webpack')

const webpackConfig = {
	mode: 'development',
	// watch: true,
	entry: {
		mind: './src/mind',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
	},
	// TODO
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'initial',
			minSize: 10000,
			minChunks: 3,
			name: 'common',
			cacheGroups: {
				lib: {
					test: /[\\/]node_modules[\\/]/,
					name: 'lib',
					priority: 10,
					enforce: true,
				},
			},
		},
	},
	resolve: {
		extensions: ['.js', '.json', '.ts'],
		alias: {
			'@data': path.resolve(__dirname, './mock-data'),
			'@style': path.resolve(__dirname, './style'),
			'@lib': path.resolve(__dirname, './lib'),
		},
	},
	devtool: 'sourcemap',
}

module.exports = webpackConfig