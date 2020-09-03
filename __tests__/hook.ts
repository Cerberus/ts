import { renderHook } from '@testing-library/react-hooks'
import { useEffect } from 'react'

const trackArticle = jest.fn()

type Article = { id: number; like: boolean }
const useTrackArticle = (article: Article) => {
	useEffect(() => {
		trackArticle(article.id)
	}, [article])
}

describe('ts', () => {
	it('useTrackArticle', () => {
		let article = { id: 1, like: false }
		renderHook(() => useTrackArticle(article))
		expect(trackArticle).toBeCalled()
	})
})
