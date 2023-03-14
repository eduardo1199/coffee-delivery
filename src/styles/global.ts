import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.ColorBaseBackground};
  }
  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  h1, h3, strong {
    font: 400 1rem 'Baloo 2', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
