'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https:fonts.googleapis.comcss2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  :root {
    --color-background: #fff;
    --color-text: #121212;
    --color-text-secondary: #260259;
    --color-text-link: #4703a6;
    --color-white: #f4f4f4;
    --color-light: #dedcfb;
    --color-primary: #5600cf;
    --color-secondary: #5600cf;
    --color-accent: #5600cf;
    --color-active: #a57ae1;
    --color-button: #EBAC31;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: 'Roboto Flex', 'Roboto', sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    display: flex;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;
