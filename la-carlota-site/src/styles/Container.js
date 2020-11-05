import styled from "styled-components"

import MainBackgroundImg from "../assets/img/background.jpg"

/**
 * Main app container
 */
export const Container = styled.div`
  align-items: center;
  background-image: url(${MainBackgroundImg});
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`
