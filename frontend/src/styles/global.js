import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #DCDCE6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    resize: vertical;
    min-height: 140px;
    color: #333;
    border: 1px solid #DCDCE6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }

`;