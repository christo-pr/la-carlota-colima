import { graphql } from "gatsby"

export const SiteQuery = graphql`
  fragment SiteSettingFragment on SanitySiteSettings {
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
`
