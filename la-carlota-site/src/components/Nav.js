import React from "react"
import { Link } from "gatsby"

export function Nav(props) {
  const { categories } = props

  return (
    <>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <Link to={category.slug.current}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
