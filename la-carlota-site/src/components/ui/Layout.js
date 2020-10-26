import React from "react"

import { GlobalStyles, MainContainer, Panel, Content } from "../../styles"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export default function Layout(props) {
  const { children } = props

  return (
    <MainContainer>
      <GlobalStyles />
      <Panel>
        <Content>
          <Nav />
          <hr />
          {children}
          <Footer />
        </Content>
      </Panel>
    </MainContainer>
  )
}
