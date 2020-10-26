import React from "react"
import { Link } from "gatsby"

import { Button } from "../../styles"

export function AllStoresBtn() {
  return (
    <Link to="/lugares">
      <Button>Ver todos los lugares!</Button>
    </Link>
  )
}
