import React, { useState } from "react"
import {
  FaHome as HomeIcon,
  FaEllipsisV as MobileMenuIcon,
} from "react-icons/fa"
import { graphql, Link, useStaticQuery } from "gatsby"

import { Menu } from "../../styles"

export function Nav(props) {
  const { withHomeLink } = props
  const [mobileOpenMenu, setMobileOpenMenu] = useState(false)
  const { categories } = useStaticQuery(graphql`
    query {
      categories: allSanityCategory {
        nodes {
          ...CategoryFragment
        }
      }
    }
  `)

  return (
    <>
      <Menu openMenu={mobileOpenMenu}>
        <div
          className="menu-mobile"
          onClick={() => setMobileOpenMenu(old => !old)}
        >
          <MobileMenuIcon />
        </div>
        <ul>
          {withHomeLink && (
            <li>
              <Link to="/">
                <HomeIcon />
              </Link>
            </li>
          )}
          {categories.nodes.map(category => (
            <li key={category.id}>
              <Link
                to={`/categorias/${category.slug.current}`}
                onClick={() => setMobileOpenMenu(false)}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </>
  )
}
