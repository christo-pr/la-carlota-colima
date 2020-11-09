import styled from "styled-components"
import { laptop } from "./Breakpoints"

/**
 * App Grid used in category, index and all products pages
 */
export const Grid = styled.div`
  margin-top: 5rem;
  display: grid;
  gap: 2.5rem;
  --columns: 1;
  --col-width: 200px;
  grid-template-columns: repeat(var(--columns), minmax(var(--col-width), 1fr));
  grid-auto-rows: 350px;
  padding: 0 1rem;

  ${laptop(`
    --columns: 3;
    --col-width: 200px;
    padding: 0 10rem;
  `)}

  .grid-item-inline,
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
      position: absolute;
      padding: 3px 0;
      margin: 0;
      z-index: 99;
      background: var(--yellow);
    }
  }

  .grid-item {
    p {
      transform: rotate(-2deg) translateY(-10px);
    }
  }

  .grid-item-inline {
    &:nth-child(2n + 1) {
      .store-image {
        transform: rotate(1deg);
      }
      p {
        transform: rotate(2deg) translateY(-10px);
        right: 0;
        left: 2px;
      }
    }
    p {
      transform: rotate(-2deg) translateY(-10px);
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
