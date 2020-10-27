import styled from "styled-components"

import BackgroundPanel from "../assets/img/background-panel.png"

/**
 * Centered main panel
 */
export const Panel = styled.div`
  max-width: 1350px;
  min-width: 1350px;
  background-image: url(${BackgroundPanel});
  background-position: center;
  background-size: contain;
  padding: 0.5rem;
  overflow: auto;
`
