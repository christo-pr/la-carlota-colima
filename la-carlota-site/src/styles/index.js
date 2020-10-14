import styled, { createGlobalStyle } from "styled-components"
import Img from "gatsby-image"

import BackgroundImg from "../assets/img/Background.jpg"
import GreenLines from "../assets/img/green-lines.svg"
import Stripes from "../assets/img/stripes.svg"
import font from "../assets/fonts/frenchfries.woff"

// Media querys
export const device = {
  mobile: `(min-width: 320px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1440px)`,
  desktop: `(min-width: $2560px)`,
}

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

    /* Variables */
    :root {
      --red: #FF4949;
      --green: #2C7731;
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

export const Image = styled(Img)``

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

  @media ${device.mobile} {
    padding-top: 5rem;
  }

  @media ${device.laptop} {
    padding-top: 10rem;
  }
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
  text-align: center;
`

export const Description = styled.p`
  width: 50%;
  margin: 3rem auto;

  span {
    border-bottom: 5px dotted var(--yellow);
  }
`

export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;

    @media ${device.mobile} {
      flex-direction: column;
    }

    @media ${device.laptop} {
      flex-direction: row;
    }

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

      &[aria-current="page"] {
        color: var(--yellow);
        text-decoration: underline;
      }

      &:hover {
        text-decoration: underline;
        color: var(--yellow);
      }
    }
  }
`

export const FeaturedStores = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  grid-auto-rows: auto;
`
