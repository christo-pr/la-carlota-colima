import React from "react"
import "normalize.css"

import Layout from "./src/templates/Layout"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
