import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

        padding: 0;
        border: 0;
        margin: 0;

        font-weight: normal;
        font-family: 'Quicksand', sans-serif;
    }
    
    #root {
        height: 100vh;
    }
`;

export default GlobalStyles;