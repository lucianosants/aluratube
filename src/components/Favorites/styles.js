import styled from 'styled-components';

export const StyledFavorites = styled.section`
	display: flex;
	width: 100%;
	padding: 16px;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;

	.favorite__content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.favorite__content--infos {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;

		&:visited {
			color: currentColor;
		}
	}

	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 2px solid red;
	}
`;
