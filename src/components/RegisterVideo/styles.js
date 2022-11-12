import styled from 'styled-components';

export const StyledRegisterVideo = styled.div`
	.add__video {
		width: 50px;
		height: 50px;
		font-size: 20px;
		color: inherit;
		position: fixed;
		bottom: 16px;
		right: 16px;
		border: 0;
		background-color: red;
		border-radius: 50%;
		z-index: 99;
		cursor: pointer;
	}
	.close__modal {
		width: 25px;
		height: 25px;
		position: absolute;
		top: 8px;
		right: 16px;
		color: inherit;
		background-color: red;
		border-radius: 50%;
		border: none;
		cursor: pointer;
	}
	button[type='submit'] {
		background-color: red;
		padding: 8px 16px;
		border: none;
		border-radius: 2px;
		cursor: pointer;
		color: inherit;
	}
	form {
		width: 100%;
		padding: 5%;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		justify-content: center;
		& > div {
			flex: 1;
			border-radius: 8px;
			border: 1px solid red;
			max-width: 320px;
			height: 300px;
			background-color: ${({ theme }) => theme.backgroundLevel2};
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			padding: 16px;
			padding-top: 40px;
		}

		.input__check--container {
			label {
				display: flex;
				flex-direction: row;
				gap: 12px;
			}

			.input__check {
				appearance: none;
				background-color: ${({ theme }) => theme.backgroundBase};
				width: 14px;
				height: 14px;
				border-radius: 50%;
				padding: 8px;
				border: 1px solid red;

				&:checked {
					background-color: red;
					border: 1px solid ${({ theme }) => theme.textColorBase};
				}
			}
		}
	}
	input {
		border-radius: 2px;
		border: 1px solid ${({ theme }) => theme.borderBase};
		padding: 8px 10px;
		margin-bottom: 10px;
		outline: none;
		color: #222222;
		background-color: #f9f9f9;
		color: ${({ theme }) => theme.textColorBase};
		background-color: ${({ theme }) => theme.backgroundBase};
	}
`;
