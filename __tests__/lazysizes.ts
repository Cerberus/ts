const REMARK = /(1920x0|1968x0|_-x_)/

const replaceSize = (src: string) => (width: number) =>
	src.replace(REMARK, `${width}x0`).concat(` ${width}w`)

const getSrcset = (widths: number[], src: string) =>
	widths.map(replaceSize(src)).join()

const getContentSrcset = (src: string) => getSrcset([400, 800, 1600, 1920], src)

const LAZY_IMG = /<img src="([\w|/|.|:|_|-]+)" (((?!\/>).)*)\/>/g

export const genLazysizesHTML = (content: string) =>
	content.replace(
		LAZY_IMG,
		(_, src: string, otherAttrs: string) =>
			`<img class="lazyload" data-sizes="auto" data-src="${replaceSize(src)(
				800,
			)}" data-srcset="${getContentSrcset(src)}" ${otherAttrs}/>`,
	)

describe('getSrcset', () => {
	const expectedSrc =
		'https://img.wongnai.com/p/400x0/2018/11/30/id.jpg 400w,https://img.wongnai.com/p/800x0/2018/11/30/id.jpg 800w'
	it('getSrcset from _-x_', () => {
		const src = 'https://img.wongnai.com/p/_-x_/2018/11/30/id.jpg'
		expect(getSrcset([400, 800], src)).toEqual(expectedSrc)
	})
	it('getSrcset from 1920x0', () => {
		const src = 'https://img.wongnai.com/p/1920x0/2018/11/30/id.jpg'
		expect(getSrcset([400, 800], src)).toEqual(expectedSrc)
	})
	it('getSrcset from 1968x0', () => {
		const src = 'https://img.wongnai.com/p/1968x0/2018/11/30/id.jpg'
		expect(getSrcset([400, 800], src)).toEqual(expectedSrc)
	})
})

describe('lazysizes', () => {
	const expectedImgTag =
		'<img class="lazyload" data-sizes="auto" data-src="https://img.wongnai.com/p/800x0/2018/11/30/id.jpg 800w" data-srcset="https://img.wongnai.com/p/400x0/2018/11/30/id.jpg 400w,https://img.wongnai.com/p/800x0/2018/11/30/id.jpg 800w,https://img.wongnai.com/p/1600x0/2018/11/30/id.jpg 1600w,https://img.wongnai.com/p/1920x0/2018/11/30/id.jpg 1920w" alt="alt123" />'
	it('generate img tag from article contents', () => {
		const contentUrl =
			'<img src="https://img.wongnai.com/p/_-x_/2018/11/30/id.jpg" alt="alt123" />'
		expect(genLazysizesHTML(contentUrl)).toEqual(expectedImgTag)
	})
})
