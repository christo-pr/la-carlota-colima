import React from "react"

import { GlobalStyles, MainContainer, Panel, Content } from "../styles"

export default function Layout(props) {
  const { children } = props

  return (
    <MainContainer>
      <GlobalStyles />
      <Panel>
        <Content>{children}</Content>
      </Panel>
    </MainContainer>
  )
}
