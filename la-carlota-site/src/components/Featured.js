import React from "react"
import { Link } from "gatsby"

import { Grid } from "../styles"
import { SingleStore } from "./SingleStore"

export function Featured(props) {
  const { stores } = props

  return (
    <Grid cols={3}>
      {stores.map(st => (
        <Link
          key={st.id}
          className="grid-item"
          to={`/lugares/${st.slug.current}`}
        >
          <SingleStore {...st} featured />
        </Link>
      ))}
    </Grid>
  )
}
