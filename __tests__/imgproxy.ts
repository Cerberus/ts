describe('imgproxy', () => {
	it('index', () => {
		const preset = [
			// 4:3
			[240, 135],
			[480, 270],
			[960, 540],
			[1920, 1080],
		]
			.map(
				([width, height]) =>
					`${width}x${height}=rt:fill/w:${width}/h:${height}/g:ce/ext:webp`,
			)
			.join(',')
		preset
	})
})
