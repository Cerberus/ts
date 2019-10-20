module.exports = function(wallaby) {
	return {
		files: ['src/*.ts', { pattern: '*.wasm', binary: true }],
		compilers: {
			'**/*.ts?(x)': wallaby.compilers.typeScript({
				useStandardDefaults: true,
				isolatedModules: true,
			}),
		},
		tests: ['__tests__/*.ts'],
		env: {
			type: 'node',
			runner: 'node',
		},
		testFramework: 'jest',
	}
}
