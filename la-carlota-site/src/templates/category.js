import React from "react"
import { graphql, Link } from "gatsby"

import { SingleStore, SEO } from "../components"
import { Grid } from "../styles"

export default function CategoryTemplate(props) {
  const { stores, category } = props.data

  return (
    <>
      <SEO title={category.name} />
      <Grid>
        {stores.nodes.map(st => (
          <Link
            key={st.id}
            className="grid-item"
            to={`/lugares/${st.slug.current}`}
          >
            <SingleStore {...st} isGrid />
          </Link>
        ))}
      </Grid>
    </>
  )
}

export const query = graphql`
  query CategoryPageQuery($categoryID: String!) {
    stores: allSanityStore(
      filter: { categories: { elemMatch: { id: { eq: $categoryID } } } }
    ) {
      nodes {
        ...StoreGridFragment
      }
    }

    category: sanityCategory(id: { eq: $categoryID }) {
      name
    }
  }
`
