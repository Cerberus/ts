const path = require('path')

module.exports = {
	mode: 'production',
	target: 'node',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				options: {
					configFile: 'tsconfig.json',
				},
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
}
