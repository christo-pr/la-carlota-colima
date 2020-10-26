import React from "react"
import { graphql } from "gatsby"

import {
  Nav,
  Featured,
  Footer,
  Logo,
  SEO,
  SiteDescription,
  AllStoresBtn,
} from "../components"

export default function Home(props) {
  const {
    data: { categories, stores, siteSettings },
  } = props

  return (
    <>
      <SEO title="Inicio" />
      <Nav categories={categories.nodes} />
      <hr />
      <Logo src={siteSettings.logo.asset.fixed} />
      <SiteDescription siteCopy={siteSettings.siteCopy} />
      <Featured stores={stores} />
      <AllStoresBtn />
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
