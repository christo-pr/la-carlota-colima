import React from "react"

import {
  Image,
  StyledStore,
  StyledStoreGrid,
  StyledStoreGridCategories,
  CategoryList,
} from "../styles"

function StoreGridView(props) {
  const { name, image } = props

  return (
    <StyledStoreGrid>
      <p>{name}</p>
      <Image fluid={image.asset.fluid} />
    </StyledStoreGrid>
  )
}

function StoreDetailView(props) {
  const { categories, description, fbLink, id, image, name } = props

  return (
    <>
      <StyledStore>
        <div className="store-image">
          <Image fixed={image.asset.fixed} />
        </div>
        <div className="store-detail">
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

function StoreGridCategoriesView(props) {
  const { categories, id, image, name } = props

  return (
    <StyledStoreGridCategories>
      <p>{name}</p>
      <div className="store-image">
        <Image fluid={image.asset.fluid} />
      </div>
      <CategoryList>
        {categories.map((cat, i) =>
          i < 2 ? <li key={cat.id}>{cat.name}</li> : null
        )}
      </CategoryList>
    </StyledStoreGridCategories>
  )
}

export function SingleStore(props) {
  const { isGrid, withCategories } = props

  if (isGrid) {
    if (withCategories) return <StoreGridCategoriesView {...props} />

    return <StoreGridView {...props} />
  }

  return <StoreDetailView {...props} />
}
