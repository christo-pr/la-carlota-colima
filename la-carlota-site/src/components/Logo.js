import React from "react"

import { Image, StyledLogo } from "../styles"

export function Logo(props) {
  const { src } = props
  return (
    <StyledLogo>
      <Image fixed={src} />
    </StyledLogo>
  )
}
