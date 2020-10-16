import React from "react"
import { graphql, Link } from "gatsby"

import { Nav, SingleStore, Footer } from "../components"
import { Grid } from "../styles"

export default function CategoryTemplate(props) {
  console.log("CategoryTemplate -> props", props)
  const { stores, categories } = props.data

  return (
    <>
      <Nav categories={categories.nodes} withHome />
      <hr />
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
      <Footer />
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
