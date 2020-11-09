import { graphql } from "gatsby"
import React from "react"

import { SingleStore, SEO } from "../components"

export default function StoreTemplate(props) {
  const {
    data: { store },
  } = props

  return (
    <>
      <SEO title={store.name} image={store.image.asset.fluid.src} />
      <SingleStore {...store} />
    </>
  )
}

export const query = graphql`
  query SingleStore($id: String!) {
    store: sanityStore(id: { eq: $id }) {
      ...StoreDetailFragment
    }
  }
`
