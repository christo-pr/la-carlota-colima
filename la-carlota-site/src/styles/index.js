import styled, { createGlobalStyle } from "styled-components"

import BackgroundImg from "../assets/img/Background.jpg"
import GreenLines from "../assets/img/green-lines.svg"
import font from "../assets/fonts/frenchfries.woff"

export const GlobalStyles = createGlobalStyle`
    /* Typography */
    @font-face {
      font-family: FrenchFries;
      src: url(${font});
    }

    html {
      font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: var(--black);
    }

    body {
      font-size: 2rem;
    }

    p, li {
      letter-spacing: 0.5px;
    }

    a {
      color: var(--black);
      text-decoration-color: var(--red);
      /* Chrome renders this weird with this font, so we turn it off */
      text-decoration-skip-ink: none;
    }

    /* Variables */
    :root {
      --red: #FF4949;
      --black: #2E2E2E;
      --yellow: #ffc600;
      --white: #fff;
      --grey: #efefef;
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

    /* Scrollbar Styles */
    body::-webkit-scrollbar {
      width: 12px;
    }

    body::-webkit-scrollbar-track {
      background: var(--white);
    }
    body::-webkit-scrollbar-thumb {
      background-color: var(--red) ;
      border-radius: 6px;
      border: 3px solid var(--white);
    }
`

export const MainContainer = styled.div`
  align-items: center;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: contain;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 10vw;
`

export const Panel = styled.div`
  min-width: 80vw;
  background-image: url(${GreenLines});
  background-position: center;
  background-size: contain;
  padding: 0.5rem;
`

export const Content = styled.div`
  background: white;
  padding: 1rem;
`
export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;

    li {
      --rotate: -2deg;
      transform: rotate(var(--rotate));
      &:nth-child(1) {
        --rotate: 1deg;
      }
      &:nth-child(2) {
        --rotate: -2.5deg;
      }
      &:nth-child(4) {
        --rotate: 2.5deg;
      }
      &:hover {
        --rotate: 3deg;
      }
    }

    a {
      text-decoration: none;
      color: var(--black);
    }
  }
`
