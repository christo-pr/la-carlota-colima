import { graphql } from "gatsby"

export const CategoryQuery = graphql`
  fragment CategoryFragment on SanityCategory {
    id
    name
    slug {
      current
    }
  }
`
