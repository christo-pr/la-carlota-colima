import styled from "styled-components"
import Img from "gatsby-image"

/**
 * Custom image component
 * Open to customization
 */
export const Image = styled(Img)`
  max-height: ${props => (props.grid ? "310px" : "auto")};
  min-height: ${props => (props.grid ? "310px" : "auto")};
`
