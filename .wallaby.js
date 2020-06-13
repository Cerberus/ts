const childProcess = require('child_process')
let firstLoad = true
module.exports = wallaby => {
	return {
		files: [
			'src/**/*.ts',
			// { pattern: '**/*.wasm', binary: true },
			'!src/assembly/**/index.ts',
		],
		compilers: {
			'**/!(file).ts': wallaby.compilers.typeScript({
				useStandardDefaults: true,
				isolatedModules: true,
			}),
		},
		tests: ['__tests__/*.ts', '__tests__/**/index.ts'],
		env: {
			type: 'node',
			runner: 'node',
		},
		testFramework: 'jest',
		postprocessor: wallaby => {
			return new Promise((resolve, reject) => {
				const asFile = wallaby.affectedFiles.find(({ path }) =>
					path.endsWith('/file.ts'),
				)
				if (!!asFile && !firstLoad) {
					childProcess.execFile(
						'./node_modules/.bin/asc',
						[
							asFile.fullPath,
							'-b',
							asFile.path.replace('.ts', '.wasm'),
							'--debug',
						],
						(e, stdout) => {
							if (e) {
								reject(e)
							} else {
								console.log('done')
								resolve()
							}
						},
					)
				} else {
					firstLoad = false
					resolve()
				}
			})
		},
	}
}
