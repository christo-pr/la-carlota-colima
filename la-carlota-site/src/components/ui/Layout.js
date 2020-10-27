import React from "react"

import { GlobalStyles, Container, Panel, Content } from "../../styles"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export default function Layout(props) {
  const { children } = props

  return (
    <Container>
      <GlobalStyles />
      <Panel>
        <Content>
          <Nav />
          <hr />
          {children}
          <Footer />
        </Content>
      </Panel>
    </Container>
  )
}
