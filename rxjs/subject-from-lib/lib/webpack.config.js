const path = require('path');
const webpack = require('webpack');
const webpackRxjsExternals = require('webpack-rxjs-externals');

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'lib',
		libraryTarget: 'umd'
	},

	externals: [
		webpackRxjsExternals(),
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			}
		]
	}
};
