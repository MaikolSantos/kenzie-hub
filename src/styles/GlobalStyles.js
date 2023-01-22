import { createGlobalStyle } from "styled-components";

export const GloblalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
  }

  :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-bg-transparent: rgba(0,0,0, 0.2);
    --color-black: #000000;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-white: #FFFFFF;
    --color-success: #3FE864;
    --color-negative: #E83F5B;

    --border-radius: 0.25rem; 
  }

  body {
    background-color: var(--color-grey-4);
    color: var(--color-grey-0);
    padding-bottom: 1rem;
  }

  ::-webkit-scrollbar {
    width: .25rem;
    height: .25rem;
  }
  
  ::-webkit-scrollbar-track-piece {
    background: var(--color-grey-2);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-3);
    border-radius: var(--border-radius);
  }
`;
