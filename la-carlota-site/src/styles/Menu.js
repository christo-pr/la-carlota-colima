import styled from "styled-components"

import { laptop } from "./Breakpoints"

/**
 * Site Top Menu
 */
export const Menu = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    ${laptop(`
      flex-direction: row;
    `)}

    li {
      --rotate: -2deg;
      transform: rotate(var(--rotate));
      padding: 0 10px;

      &::before {
        content: "";
        position: absolute;
        height: 150%;
        width: 2px;
        background: var(--yellow);
        right: 0px;
        top: -10px;
        transform: rotate(-2deg) !important;
      }

      &:nth-child(1) {
        --rotate: 1deg;
      }
      &:nth-child(2) {
        --rotate: -2.5deg;
      }
      &:nth-child(4) {
        --rotate: 1.5deg;
      }
      &:hover {
        --rotate: 4deg;
      }
      &:last-child {
        &::before {
          background: unset;
        }
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
