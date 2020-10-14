import React from "react"

import { StyledFooter } from "../styles"

export function Footer() {
  return (
    <StyledFooter>
      <p>&copy; La Carlota.io - {new Date().getFullYear()} </p>
    </StyledFooter>
  )
}
