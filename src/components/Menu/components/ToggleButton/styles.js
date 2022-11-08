import styled from 'styled-components';

export const StyledToggleTheme = styled.button`
	width: 50px;
	height: 26px;
	border-radius: 30px;
	cursor: pointer;
	position: relative;
	border: none;
	background-color: ${({ theme }) => theme.backgroundLevel2};
	border: 2px solid ${({ theme }) => theme.borderBase};

	&:before {
		content: '🌞';
		left: 0;
		top: 0;
	}
`;
