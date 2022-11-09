import styled from 'styled-components';

export const StyledVideoContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* width: 100%; */
	gap: 16px;
	flex: 1;
	padding: 16px;

	a {
		color: ${({ theme }) => theme.textColorBase};
		border: 1px solid ${({ theme }) => theme.borderBase};
		padding: 16px;
	}

	iframe {
		border-radius: 4px;
		width: 550px;
		height: 315px;
		border: 1px solid ${({ theme }) => theme.borderBase};
	}
`;
