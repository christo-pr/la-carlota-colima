import React from "react"
import "normalize.css"
// Custom styles
import "../styles/main.scss"

import { Container, Nav } from "../components"

export default function Layout(props) {
  const { children } = props

  return (
    <>
      <Nav />
      <Container>{children}</Container>
    </>
  )
}
