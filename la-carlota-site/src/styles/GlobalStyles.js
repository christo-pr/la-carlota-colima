import { createGlobalStyle } from "styled-components"

import FrenchFrieTtf from "../assets/fonts/French_Fries.ttf"

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'French Fries';
        src: url(${FrenchFrieTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    * {
      font-family: "French Fries";
    }
`
