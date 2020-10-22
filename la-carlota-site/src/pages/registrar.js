import React from "react"
import { graphql } from "gatsby"

import { Nav, Footer } from "../components/"
import { RegisterForm, Button } from "../styles"

export default function Register(props) {
  const {
    data: { categories },
  } = props

  return (
    <>
      <Nav categories={categories.nodes} withHome />
      <hr />
      <RegisterForm
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <p>
          Por el momento, el proceso de registro para un lugar es muy simple,
          mandanos su Facebook, y nosotros hacemos el resto.
          <br /> Recuerda, <b>TODOS</b> los lugares en <span>La Carlota</span>{" "}
          son recomendaciones locales.
        </p>
        <div className="form-group">
          <input type="text" placeholder="Facebook URL" required />
        </div>
        <Button>Enviar</Button>
      </RegisterForm>

      <Footer isRegisterPage />
    </>
  )
}

export const query = graphql`
  query RegisterPageQuery {
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
