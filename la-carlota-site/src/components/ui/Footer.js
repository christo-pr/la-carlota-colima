import React from "react"
import { Link } from "gatsby"
import { MdAssignment as Icon } from "react-icons/md"

import { StyledFooter } from "../../styles"

export function Footer(props) {
  const { isRegisterPage } = props

  return (
    <StyledFooter>
      <p>&copy; La Carlota.io - {new Date().getFullYear()} </p>
      {!isRegisterPage && (
        <p>
          <Link to="/registrar" style={{ display: "flex" }}>
            <Icon />
            Registra un lugar!
          </Link>
        </p>
      )}
    </StyledFooter>
  )
}
