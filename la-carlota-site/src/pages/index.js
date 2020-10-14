import React from "react"
import { graphql, Link } from "gatsby"

import { Nav, Featured, Footer } from "../components"
import { Description } from "../styles"
import { randomList } from "../utils/random"

export default function Home(props) {
  const {
    data: { categories, stores },
  } = props

  const featuredStores = randomList(6, stores.nodes.length).map(
    id => stores.nodes[id]
  )
  return (
    <>
      <Nav categories={categories.nodes} />
      <hr />
      <Description>
        <span>La Carlota </span> es un sitio web en el que encontraras una lista
        de los diferentes lugares que existen en Colima para comer, desayunar,
        cenar o simplemente para cumplir un antojo.
        <br />
        <b>TODOS</b> los lugares registrados dentro de <span>La Carlota </span>{" "}
        son meramente recomendaciones locales, si quieres que se agregue algun
        lugar o categoria, puedes registrarlo: <Link to="/register">Aqui</Link>
      </Description>
      <Featured stores={featuredStores} />
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
        categories {
          id
        }
        description
        fbLink
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
  }
`
