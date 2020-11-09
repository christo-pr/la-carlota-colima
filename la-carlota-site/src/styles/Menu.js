import styled from "styled-components"

import { laptop } from "./Breakpoints"

/**
 * Site Top Menu
 */
export const Menu = styled.div`
  text-align: left;

  .menu-mobile {
    padding: 0 1rem;
  }

  ${laptop(`
    .menu-mobile {
      display: none;
    }
  `)}

  ul {
    display: ${props => (props.openMenu ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    list-style: none;

    ${laptop(`
      display: flex;
      flex-direction: row;
      align-items: center;
    `)}

    li {
      --rotate: -2deg;
      transform: rotate(var(--rotate));
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--yellow);

      ${laptop(
        `
        padding: 0 10px;
        border-bottom: 0;

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
        `
      )}

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
