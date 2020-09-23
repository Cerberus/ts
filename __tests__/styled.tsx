import { css } from 'styled-components';

const raw = css`
	background: red;
`;
const style = css`
	${raw}
	color: red
`;

describe('styled', () => {
	it('simple', () => {
		console.log('style', style);
	});
});
