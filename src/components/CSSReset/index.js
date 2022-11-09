import { createGlobalStyle } from 'styled-components';

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
        width: 8px;
        height: 12px;
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.backgroundLevel2};
        border: 2px solid ${({ theme }) => theme.borderBase};
        border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.textColorBase};
        border-radius: 12px;
    }

  body {
    font-family: sans-serif;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
    overflow-x: hidden;
    

    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
    
    
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;
