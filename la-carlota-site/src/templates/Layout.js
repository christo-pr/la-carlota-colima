import React from "react"
import "normalize.css"

import { Container } from "../components"

export default function Layout(props) {
  const { children } = props

  return (
    <>
      <Container>{children}</Container>
    </>
  )
}
