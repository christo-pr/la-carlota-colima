import styled from "styled-components"

import { laptop } from "./Breakpoints"

/**
 * Content wrapper
 */
export const Content = styled.div`
  background: white;
  min-height: 100%;
  height: 100%;
  padding: 1rem;
  text-align: center;

  hr {
    display: none;
  }

  ${laptop(`

    hr {
      display: block;
    }
  `)}
`
