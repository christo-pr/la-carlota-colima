import React from "react"

import { Description } from "../styles"
import { parseSiteDescription } from "../utils/site"

export function SiteDescription(props) {
  const { siteCopy } = props

  return (
    <Description
      dangerouslySetInnerHTML={{
        __html: parseSiteDescription(siteCopy),
      }}
    />
  )
}
