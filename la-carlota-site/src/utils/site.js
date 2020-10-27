/**
 * The site description is coming from Sanity
 * So each new line, becomes an item inside the
 * array of childrens.
 */
export function parseSiteDescription(siteCopy) {
  return siteCopy.map(copy => copy.children[0].text).join("<br />")
}
