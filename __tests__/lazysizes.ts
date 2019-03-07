const REMARK = /(1920x0|1968x0|_-x_)/

const replaceSize = (src: string) => (width: number) =>
	src.replace(REMARK, `${width}x0`).concat(` ${width}w`)

const getSrcset = (src: string) => [400, 800, 1600].map(replaceSize(src)).join()

const LAZY_IMG = /<img src="([\w|/|.|:|_|-]+)" (((?!\/>).)*)\/>/g

export const genLazysizesHTML = (content: string) =>
	content.replace(
		LAZY_IMG,
		(_, src: string, otherAttrs: string) =>
			`<img class="lazyload" data-src="${replaceSize(src)(
				800,
			)}" data-srcset="${getSrcset(src)}" ${otherAttrs}/>`,
	)

describe.only('lazysizes', () => {
	it('simple', () => {
		const content =
			'<img src="https://img.wongnai.com/p/_-x_/2018/11/30/b6a903a42e0f4d43b8e75e2f5f410e4b.jpg" alt="alt123" />'
		expect(genLazysizesHTML(content)).toEqual(
			'<img class="lazyload" data-src="https://img.wongnai.com/p/800x0/2018/11/30/b6a903a42e0f4d43b8e75e2f5f410e4b.jpg 800w" data-srcset="https://img.wongnai.com/p/400x0/2018/11/30/b6a903a42e0f4d43b8e75e2f5f410e4b.jpg 400w,https://img.wongnai.com/p/800x0/2018/11/30/b6a903a42e0f4d43b8e75e2f5f410e4b.jpg 800w,https://img.wongnai.com/p/1600x0/2018/11/30/b6a903a42e0f4d43b8e75e2f5f410e4b.jpg 1600w" alt="alt123" />',
		)
	})
})
