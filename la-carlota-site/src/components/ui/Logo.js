import React from "react"

import { Image, AppLogo } from "../../styles"

export function Logo(props) {
  const { src } = props
  return (
    <AppLogo>
      <Image fixed={src} />
    </AppLogo>
  )
}
