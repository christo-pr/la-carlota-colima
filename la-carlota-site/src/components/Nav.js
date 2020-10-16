import React from "react"
import { Link } from "gatsby"

import { Menu } from "../styles"

export function Nav(props) {
  const { categories, withHome } = props

  return (
    <>
      <Menu>
        <ul>
          {withHome && (
            <li>
              <Link to="/">Inicio</Link>
            </li>
          )}
          {categories.map(category => (
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
