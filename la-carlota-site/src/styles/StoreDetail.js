import styled from "styled-components"

import { laptop } from "./Breakpoints"

/**
 * Store Detail view
 */
export const StoreDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;

  .store-image {
    border: 10px solid var(--yellow);
    width: 100%;
    max-width: 100%;
    transform: rotate(-1deg);
    box-shadow: -2px 3px 6px var(--black);
  }

  ${laptop(`
    padding: 3rem 5rem;
    flex-direction: row;

    .store-image {
      width: 50%;
      height: 100%;
    }
  `)}

  .store-info {
    margin-top: 1rem;
    text-align: left;

    > div {
      margin-top: 1rem;
    }

    .fb-icon {
      fill: #4267b2;
    }

    span {
      font-size: 0.9em;
      margin-left: 10px;
    }
  }
`

/**
 * Store Grid view
 */
export const StoreGrid = styled.div`
  p {
    width: 100%;
    left: -1px;
    font-size: 0.6em;
  }

  .store-image {
    border: 10px solid var(--yellow);
    transform: rotate(-1deg);
    box-shadow: -2px 3px 6px var(--black);
  }

  ul {
    position: absolute;
    bottom: 23px;
    left: 5px;

    li {
      transform: rotate(0deg);
    }
  }
`
