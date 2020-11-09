import styled from "styled-components"

import BackgroundPanel from "../assets/img/background-panel.png"
import { laptop, desktop, tablet } from "./Breakpoints"

/**
 * Centered main panel
 */
export const Panel = styled.div`
  max-width: 320px;
  min-width: 320px;
  background-image: url(${BackgroundPanel});
  background-position: center;
  background-size: contain;
  padding: 0.5rem;
  overflow: auto;

  ${tablet(`
      max-width: 700px;
      min-width: 700px;
    `)}

  ${laptop(`
    max-width: 1200px;
    min-width: 1200px;
  `)}

  ${desktop(`
      max-width: 1350px;
      min-width: 1350px;
    `)}

  @media var(--media-mobile) {
    max-width: 100%;
    min-width: 100%;
  }
`
