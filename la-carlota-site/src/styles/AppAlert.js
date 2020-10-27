import styled from "styled-components"

export const AppAlert = styled.div`
  display: ${props => (props.show ? "flex" : "none")};
  width: 100%;
  justify-content: space-between;
  background: ${props =>
    props.type === "success" ? "var(--green)" : "var(--red)"};
  color: white;
  padding: 0.5rem 0 0.5rem 0.5rem;
  font-size: 0.6em;

  svg {
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`
