import styled, { createGlobalStyle } from "styled-components"
import Img from "gatsby-image"
import "normalize.css"

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
      --blue: #1275B3;
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

export const Button = styled.button`
  background: var(--yellow);
  border-style: none;
  padding: 10px;
  margin: 1rem 0;

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: none;
    transform: scale(0.95);
  }

  &:hover {
    a {
      color: var(--red);
    }
  }

  a {
    text-decoration: none;
    transition: 0s;
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
  align-items: center;
  justify-content: center;
`

export const Panel = styled.div`
  max-width: 1350px;
  min-width: 1350px;
  background-image: url(${GreenLines});
  background-position: center;
  background-size: contain;
  padding: 0.5rem;
  overflow: auto;
`

export const Content = styled.div`
  background: white;
  min-height: 100%;
  height: 100%;
  padding: 1rem;
  text-align: center;
`

export const Description = styled.div`
  font-size: 0.9em;
  width: 80%;
  margin: 3rem auto;

  span {
    border-bottom: 5px dotted var(--yellow);
  }
`

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  font-size: 0.43em;
  padding: 0;
  margin: 0;

  li {
    letter-spacing: 3px;
    background: var(--blue);
    color: var(--white);
    padding: 0.2rem;
    transform: rotate(-10deg);
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

export const Grid = styled.div`
  margin-top: 5rem;
  display: grid;
  gap: 2.5rem;
  --columns: ${props => props.cols};
  grid-template-columns: repeat(var(--columns), minmax(200px, 1fr));
  grid-auto-rows: 350px;
  padding: 0 10rem;

  .grid-item {
    text-align: center;
    position: relative;

    &:hover {
      cursor: pointer;

      img {
        animation: hoverItem 0.3s ease-in-out;
        animation-fill-mode: forwards;
      }
    }

    img {
      max-width: 100%;
      max-height: 100%;
      transition: 0.3s;
    }

    p {
      top: 0;
      transform: rotate(-2deg) translateY(-10px);
      position: absolute;
      width: 103%;
      left: -5px;
      margin: 0;
      font-size: 2rem;
      font-size: clamp(12px, 5vw, 20px);
      z-index: 99;
      background: var(--yellow);
    }
  }

  @keyframes hoverItem {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`

export const StyledFooter = styled.div`
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;

  p {
    margin-bottom: 0;
  }
`

export const StyledLogo = styled.div`
  margin: 2rem 0;
`

export const StyledStore = styled.div`
  display: flex;
  gap: 3rem;
  padding: 3rem 5rem;

  .store-image {
    border: 10px solid var(--yellow);
    height: 400px;
    transform: rotate(-1deg);
    box-shadow: -2px 3px 6px var(--black);
  }
`

export const StyledMap = styled.div`
  width: 700px;
  height: 350px;
  border: 2px solid var(--blue);
  margin-top: 3rem;
  margin-right: auto;
  margin-left: auto;
}
`
