import styled from "styled-components"

/**
 * Site Top Menu
 */
export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;

    @media var(--media-mobile) {
      flex-direction: column;
    }

    @media var(--media-laptop) {
      flex-direction: row;
    }

    li {
      --rotate: -2deg;
      transform: rotate(var(--rotate));
      &:nth-child(1) {
        --rotate: 1deg;
      }
      &:nth-child(2) {
        --rotate: -2.5deg;
      }
      &:nth-child(4) {
        --rotate: 2.5deg;
      }
      &:hover {
        --rotate: 3deg;
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
