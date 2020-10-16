import React from "react"
import { graphql, Link } from "gatsby"

import { Nav, SingleStore } from "../components"
import { Grid } from "../styles"

export default function CategoryTemplate(props) {
  const { stores, categories } = props.data
  let cols = 3,
    rowSize = 350
  const totalStores = stores.nodes.length

  if (totalStores >= 5) {
    cols = 4
    rowSize = 250
  }

  return (
    <>
      <Nav categories={categories.nodes} withHome />
      <hr />
      <Grid cols={cols} rowSize={rowSize}>
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
        id
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        name
        slug {
          current
        }
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
