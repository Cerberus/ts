import { renderHook } from '@testing-library/react-hooks'
import { useEffect } from 'react'

const trackArticle = jest.fn()

type Article = { id: number; bookmark: boolean }
const useTrackArticle = (article: Article) => {
	useEffect(() => {
		trackArticle(article.id)
	}, [article.id])
}

describe('ts', () => {
	it('useTrackArticle', () => {
		let article = { id: 1, bookmark: false }
		const { rerender } = renderHook(() => useTrackArticle(article))
		expect(trackArticle).toBeCalledTimes(1)
		expect(trackArticle).toBeCalledWith(1)
		article = { id: 1, bookmark: true }
		rerender()
		expect(trackArticle).toBeCalledTimes(1)
		expect(trackArticle).toBeCalledWith(1)
	})
})
