import React from "react"

import { GlobalStyles, MainContainer } from "../styles"

export default function Layout(props) {
  const { children } = props

  return (
    <MainContainer>
      <GlobalStyles />
      {children}
    </MainContainer>
  )
}
