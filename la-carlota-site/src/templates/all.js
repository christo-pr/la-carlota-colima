import React from "react"
import { graphql, Link } from "gatsby"

import { SingleStore, SEO } from "../components"
import { Grid } from "../styles"

export default function CategoryTemplate(props) {
  const { stores } = props.data

  return (
    <>
      <SEO title="Conoce lugares" />
      <Grid cols={4} rowSize={250}>
        {stores.nodes.map(st => (
          <Link
            key={st.id}
            className="grid-item-inline"
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
  query AllStores {
    stores: allSanityStore {
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
        categories {
          id
          name
          slug {
            current
          }
        }
      }
    }
  }
`
