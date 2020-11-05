import React from "react"
import { Link } from "gatsby"

import { Grid } from "../styles"
import { SingleStore } from "./SingleStore"
import { randomList } from "../utils/random"

export function Featured(props) {
  const { stores } = props

  const featuredStores = randomList(3, stores.nodes.length).map(
    id => stores.nodes[id]
  )

  return (
    <Grid>
      {featuredStores.map(st => (
        <Link
          key={st.id}
          className="grid-item"
          to={`/lugares/${st.slug.current}`}
        >
          <SingleStore {...st} isGrid />
        </Link>
      ))}
    </Grid>
  )
}
