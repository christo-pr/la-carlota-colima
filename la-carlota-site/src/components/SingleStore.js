import React from "react"

import { Image, StyledStore, CategoryList } from "../styles"

export function SingleStore(props) {
  const { categories, description, fbLink, id, image, name, isGrid } = props

  return isGrid ? (
    <>
      <p>{name}</p>
      <Image fluid={image.asset.fluid} />
    </>
  ) : (
    <>
      <StyledStore>
        <div className="store-image">
          <Image fixed={image.asset.fixed} />
        </div>
        <div>
          <CategoryList>
            {categories.map(cat => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </CategoryList>
          <h1>{name}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: description[0].children[0].text,
            }}
          ></div>
          {/* <Map /> // Feature for future */}
        </div>
      </StyledStore>
    </>
  )
}
