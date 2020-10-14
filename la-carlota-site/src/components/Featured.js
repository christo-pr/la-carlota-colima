import React from "react"

import { FeaturedStores, Image } from "../styles"

export function Featured(props) {
  const { stores } = props

  return (
    <FeaturedStores>
      {stores.map(st => (
        <div key={st.id}>
          <Image fluid={st.image.asset.fluid} />
        </div>
      ))}
    </FeaturedStores>
  )
}
