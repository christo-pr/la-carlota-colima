import React from "react"
import { graphql, Link } from "gatsby"

import { SingleStore, SEO } from "../components"
import { Grid } from "../styles"

export default function CategoryTemplate(props) {
  const { stores, category } = props.data
  let cols = 3,
    rowSize = 350
  const totalStores = stores.nodes.length

  if (totalStores >= 5) {
    cols = 4
    rowSize = 250
  }

  return (
    <>
      <SEO title={category.name} />
      <Grid cols={cols} rowSize={rowSize}>
        {stores.nodes.map(st => (
          <Link
            key={st.id}
            className="grid-item"
            to={`/lugares/${st.slug.current}`}
          >
            <SingleStore {...st} isGrid withCategories />
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
