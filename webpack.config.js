const path = require('path')
const webpack = require('webpack')

const webpackConfig = {
	mode: process.env.NODE_ENV || 'production',
	// watch: true,
	entry: {
		mind: './demos/js/mind',
		editor: './demos/js/editor',
	},
	output: {
		filename: '[name].build.js',
		path: path.resolve(__dirname, './demos/dist'),
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
			}, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
		]
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'initial',
	// 		minSize: 10000,
	// 		minChunks: 3,
	// 		name: 'common',
	// 		cacheGroups: {
	// 			lib: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				name: 'lib',
	// 				priority: 10,
	// 				enforce: true,
	// 			},
	// 		},
	// 	},
	// },
	resolve: {
		extensions: ['.js', '.json', '.ts'],
		alias: {
			// '@data': path.resolve(__dirname, './mock-data'),
			'@style': path.resolve(__dirname, './style'),
			'@lib': path.resolve(__dirname, './lib'),
			'@src': path.resolve(__dirname, './src'),
		},
	},
	devtool: 'sourcemap',
}

module.exports = webpackConfig
