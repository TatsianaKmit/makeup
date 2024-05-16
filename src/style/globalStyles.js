import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: inherit; */
     }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
      }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  form {
    margin: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

`;


export default GlobalStyles;