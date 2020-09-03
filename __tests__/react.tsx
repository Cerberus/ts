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
		const getJsx = () => <Text obj={obj} />
		const { rerender } = render(getJsx())
		screen.getByText('1')

		obj.text = '2'
		rerender(getJsx())
		screen.getByText('2')
	})
})
