import styled from "styled-components"

/**
 * Custom Button
 */
export const Button = styled.button`
  background: var(--yellow);
  border-style: none;
  padding: 0.5rem;
  margin: 1rem 0;
  min-width: 9rem;
  min-height: 3rem;

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: none;
    transform: scale(0.95);
  }

  &:hover {
    cursor: pointer;

    a {
      color: var(--red);
    }
  }

  a {
    text-decoration: none;
    transition: 0s;
  }
`
