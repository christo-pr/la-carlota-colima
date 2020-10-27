import styled from "styled-components"

/**
 * Product category List
 */
export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  font-size: 0.43em;
  padding: 0;
  margin: 0;

  li {
    letter-spacing: 3px;
    background: var(--blue);
    color: var(--white);
    padding: 0.2rem;
    transform: rotate(-10deg);
  }
`
