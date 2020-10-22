import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export const SEO = props => {
  const { children, location, title, image } = props
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet titleTemplate={`${site.siteMetadata.title} | %s `}>
      <html lang="es" />
      <title>{title}</title>

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/favicon.png"} />
      <meta
        property="og:title"
        content={`${site.siteMetadata.title} | ${title}`}
        key="ogtitle"
      />
      <meta
        propery="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={site.siteMetadata.description}
        key="ogdesc"
      />

      {/* Any override */}
      {children}
    </Helmet>
  )
}
