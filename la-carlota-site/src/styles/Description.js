import styled from "styled-components"

import { tablet } from "./Breakpoints"

/**
 * Container for the site description
 */
export const Description = styled.div`
  display: none;

  ${tablet(`
    display: block;
    font-size: 0.9em;
    width: 80%;
    margin: 3rem auto;

    span {
      border-bottom: 5px dotted var(--yellow);
    }
  `)}
`
