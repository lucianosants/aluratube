import styled from 'styled-components';

export const StyledHeader = styled.header`
	margin-top: 50px;

	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 2px solid red;
	}

	.user__info {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 16px;
		padding: 16px 32px;
	}
`;
