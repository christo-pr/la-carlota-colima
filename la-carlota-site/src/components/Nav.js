import React from "react"
import { Link } from "gatsby"

import { Menu } from "../styles"

export function Nav(props) {
  const { categories } = props

  return (
    <>
      <Menu>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <Link to={category.slug.current}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </Menu>
    </>
  )
}
