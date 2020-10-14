import React from "react"

import { Image } from "../styles"

export function Store(props) {
  const {
    categories,
    description,
    fbLink,
    id,
    image,
    name,
    slug,
    featured,
  } = props

  return (
    <>
      <p>{name}</p>
      <Image fluid={image.asset.fluid} />
    </>
  )
}
