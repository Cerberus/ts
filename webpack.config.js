const path = require('path')

module.exports = {
	target: 'webworker',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
			},
			{
				test: /\.js?$/,
				use: 'ts-loader',
			},
		],
	},
	resolve: {
		modules: ['node_modules'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'production',
	optimization: {
		usedExports: true,
	},
}
