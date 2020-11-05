import React from "react"

import { GlobalStyles, Container, Panel, Content } from "../../styles"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export default function Layout(props) {
  const { children, path } = props

  return (
    <Container>
      <GlobalStyles />
      <Panel>
        <Content>
          <Nav withHomeLink={path !== "/"} />
          <hr />
          {children}
          <Footer isRegisterPage={path === "/registrar/"} />
        </Content>
      </Panel>
    </Container>
  )
}
