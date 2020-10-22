import { graphql } from "gatsby"
import React from "react"

import { SingleStore, Nav, Footer, SEO } from "../components"

export default function StoreTemplate(props) {
  const {
    data: { store, categories },
  } = props

  return (
    <>
      <SEO title={store.name} image={store.image.asset.fixed.src} />
      <Nav categories={categories.nodes} withHome />
      <hr />
      <SingleStore {...store} />
      <Footer />
    </>
  )
}

export const query = graphql`
  query SingleStore($id: String!) {
    store: sanityStore(id: { eq: $id }) {
      categories {
        id
        name
        slug {
          current
        }
      }
      description {
        children {
          text
        }
      }
      fbLink
      id
      image {
        asset {
          fixed(width: 400, height: 400) {
            ...GatsbySanityImageFixed
          }
        }
      }
      name
      phone
      location
      slug {
        current
      }
      mapLocation {
        lat
        lng
      }
    }
    categories: allSanityCategory {
      nodes {
        id
        name
        slug {
          current
        }
      }
    }
  }
`
