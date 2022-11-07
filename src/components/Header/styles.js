import styled from 'styled-components';

export const StyledHeader = styled.header`
	margin-top: 50px;

	.user__banner {
		width: 100%;
		height: 230px;
		background-image: url('./banner.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.user__info {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 16px;
		padding: 16px 32px;

		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			border: 2px solid red;
		}
	}
`;
