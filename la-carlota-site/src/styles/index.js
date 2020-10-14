import styled, { createGlobalStyle } from "styled-components"

import BackgroundImg from "../assets/img/Background.jpg"
import GreenLines from "../assets/img/green-lines.svg"
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

export const MainContainer = styled.div`
  align-items: center;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: contain;
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
