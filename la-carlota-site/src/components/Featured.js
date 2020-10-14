import React from "react"

import { Grid } from "../styles"
import { Store } from "./Store"

export function Featured(props) {
  const { stores } = props
  console.log("Featured -> stores", stores)

  return (
    <Grid cols={3}>
      {stores.map(st => (
        <div key={st.id} className="grid-item">
          <Store {...st} featured />
        </div>
      ))}
    </Grid>
  )
}
