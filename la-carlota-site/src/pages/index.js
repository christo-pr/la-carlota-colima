import React from "react"
import { graphql, Link } from "gatsby"

import { Nav, Featured, Footer, Logo, SEO } from "../components"
import { Description, Button } from "../styles"
import { randomList } from "../utils/random"

export default function Home(props) {
  const {
    data: { categories, stores, siteSettings },
  } = props

  const featuredStores = randomList(6, stores.nodes.length).map(
    id => stores.nodes[id]
  )

  const getSiteHomeDescription = siteCopy => {
    return siteCopy.map(copy => copy.children[0].text).join("<br />")
  }

  return (
    <>
      <SEO title="Inicio" />
      <Nav categories={categories.nodes} />
      <hr />
      <Logo src={siteSettings.logo.asset.fixed} />
      <Description
        dangerouslySetInnerHTML={{
          __html: getSiteHomeDescription(siteSettings.siteCopy),
        }}
      />
      <Featured stores={featuredStores} />
      <Button>
        <Link to="/lugares">Ver todos los lugares!</Link>
      </Button>
      <Footer />
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

    siteSettings: sanitySiteSettings {
      logo {
        asset {
          fixed(width: 250) {
            ...GatsbySanityImageFixed
          }
        }
      }
      siteCopy {
        children {
          text
        }
      }
    }
  }
`
