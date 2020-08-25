import React from 'react'
import { render, screen } from '@testing-library/react'

type Props = {
	obj: {
		text: string
	}
}

const Text = (props: Props) => <>{props.obj.text}</>

describe('react', () => {
	it('simple', () => {
		const obj = {
			text: '1',
		}
		const { rerender } = render(<Text obj={obj} />)
		screen.getByText('1')

		obj.text = '2'
		rerender(<Text obj={obj} />)
		screen.getByText('2')
	})
})
