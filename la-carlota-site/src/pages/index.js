import React from "react"
import { graphql } from "gatsby"

export default function Home() {
  return <div>Hello world!</div>
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
