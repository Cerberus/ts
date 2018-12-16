module.exports = function(wallaby) {
	return {
		files: ['src/*.ts'],
		compilers: {
			'**/*.ts?(x)': wallaby.compilers.typeScript({
				useStandardDefaults: true,
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
