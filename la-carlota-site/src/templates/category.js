import React from "react"
import { graphql, Link } from "gatsby"

import { Nav, SingleStore, Footer, SEO } from "../components"
import { Grid } from "../styles"

export default function CategoryTemplate(props) {
  const { stores, categories, category } = props.data
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
      <Nav categories={categories.nodes} withHome />
      <hr />
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
      <Footer />
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
        categories {
          id
          name
          slug {
            current
          }
        }
      }
    }

    category: sanityCategory(id: { eq: $categoryID }) {
      name
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
