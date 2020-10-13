import React from "react"
import { graphql } from "gatsby"

import { Nav } from "../components"

export default function Home(props) {
  const {
    data: { categories },
  } = props

  return (
    <>
      <Nav categories={categories.nodes} />
    </>
  )
}

export const query = graphql`
  query InitialData {
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
