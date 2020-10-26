import React from "react"
import { graphql } from "gatsby"

import {
  Featured,
  Logo,
  SEO,
  SiteDescription,
  AllStoresBtn,
} from "../components"

export default function Home(props) {
  const {
    data: { stores, siteSettings },
  } = props

  return (
    <>
      <SEO title="Inicio" />
      <Logo src={siteSettings.logo.asset.fixed} />
      <SiteDescription siteCopy={siteSettings.siteCopy} />
      <Featured stores={stores} />
      <AllStoresBtn />
    </>
  )
}

export const query = graphql`
  query InitialData {
    stores: allSanityStore {
      nodes {
        ...StoreGridFragment
      }
    }

    siteSettings: sanitySiteSettings {
      ...SiteSettingFragment
    }
  }
`
