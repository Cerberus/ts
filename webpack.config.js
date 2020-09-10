const path = require('path');

module.exports = {
	target: 'node',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
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
	mode: 'production',
};
