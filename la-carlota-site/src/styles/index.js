import { createGlobalStyle } from "styled-components"
import "normalize.css"

import Stripes from "../assets/img/stripes.svg"
import font from "../assets/fonts/frenchfries.woff"

/**
 * Global Styles
 */
export const GlobalStyles = createGlobalStyle`
    /* Typography */
    @font-face {
      font-family: FrenchFries;
      src: url(${font});
    }

    /* Variables */
    :root {
      --yellow: #ffc600;
      --red: #FF1919;
      --green: #00B333;
      --black: #2E2E2E;
      --white: #fff;
      --grey: #efefef;
      --blue: #1275B3;
    }

    html {
      font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: var(--black);
    }

    body {
      font-size: calc(22px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    }

    p, li {
      letter-spacing: 0.5px;
    }

    p {
      font-size: .7em;
    }

    a {
      color: var(--black);
      text-decoration-color: var(--red);
      /* Chrome renders this weird with this font, so we turn it off */
      text-decoration-skip-ink: none;
      transition: .3s;
      &:hover {
        color: var(--red);
      }
    }

    /* Utilities */
    .gatsby-image-wrapper img[src*=base64\\,] {
      image-rendering: -moz-crisp-edges;
      image-rendering: pixelated;
    }

    img {
      max-width: 100%;
    }

    .tilt {
      transform: rotate(-2deg);
    }

    hr {
      border: 0;
      height: 5px;
      background-image: url(${Stripes});
      background-size: 1500px;
    }

    /* Scrollbar Styles */
    body::-webkit-scrollbar {
      width: 12px;
    }

    body::-webkit-scrollbar-track {
      background: var(--white);
    }
    body::-webkit-scrollbar-thumb {
      background-color: var(--green) ;
      border-radius: 6px;
      border: 3px solid var(--white);
    }
`

/**
 * Other components
 */
export * from "./AppAlert"
export * from "./AppFooter"
export * from "./AppLogo"
export * from "./Button"
export * from "./CategoryList"
export * from "./Container"
export * from "./Content"
export * from "./Description"
export * from "./Form"
export * from "./Grid"
export * from "./Image"
export * from "./Loading"
export * from "./Menu"
export * from "./Panel"
export * from "./StoreDetail"
