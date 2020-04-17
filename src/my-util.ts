import { lowLevelFetch } from 'track'

export const call = () => {
	console.log('test')

	return lowLevelFetch()
}
