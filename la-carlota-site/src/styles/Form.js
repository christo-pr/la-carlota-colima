import styled from "styled-components"

/**
 * App Form
 */
export const Form = styled.form`
  padding: 0 10rem;

  span {
    border-bottom: 5px dotted var(--yellow);
  }

  input {
    border: 4px solid var(--black);
    border-radius: 5px;
    padding: 10px;
    box-shadow: 2px 2px 0px var(--yellow);

    &:hover,
    &:focus,
    &:active {
      outline: 0;
    }

    &:disabled {
      background: var(--grey);
    }

    // Honey pot
    &:nth-child(2) {
      display: none;
    }
  }
`
