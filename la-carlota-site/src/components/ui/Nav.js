import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { Menu } from "../../styles"

export function Nav(props) {
  const { categories } = useStaticQuery(graphql`
    query {
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
  `)

  return (
    <>
      <Menu>
        <ul>
          {categories.nodes.map(category => (
            <li key={category.id}>
              <Link to={`/categorias/${category.slug.current}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </>
  )
}
