import { graphql } from "gatsby"

export const StoreQuery = graphql`
  fragment StoreGridFragment on SanityStore {
    id
    name
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
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

  fragment StoreDetailFragment on SanityStore {
    id
    name
    phone
    location
    fbLink
    categories {
      id
      name
      slug {
        current
      }
    }
    description {
      children {
        text
      }
    }
    image {
      asset {
        fluid(maxHeight: 600) {
          ...GatsbySanityImageFluid
        }
      }
    }
    slug {
      current
    }
    mapLocation {
      lat
      lng
    }
  }
`
