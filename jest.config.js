module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
	moduleDirectories: ['node_modules', 'src'],
	watchPathIgnorePatterns: ['<rootDir>/src/assembly/'],
}
