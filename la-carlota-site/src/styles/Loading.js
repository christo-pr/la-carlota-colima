import styled from "styled-components"

/**
 * App Loading Element
 */
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: " ";
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 6px solid var(--black);
    border-color: var(--black) transparent var(--black) transparent;
    animation: loading 1.2s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
