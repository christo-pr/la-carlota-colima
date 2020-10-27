import React from "react"
import {
  FaFacebook as FbIcon,
  FaExternalLinkAlt as ExternalIcon,
} from "react-icons/fa"
import { FcPhoneAndroid as PhoneIcon, FcShop as MapIcon } from "react-icons/fc"

import { Image, StoreDetail, StoreGrid, CategoryList } from "../styles"

function StoreDetailView(props) {
  const {
    categories,
    description,
    fbLink,
    image,
    name,
    phone,
    location,
    mapLocation,
  } = props

  const generateLocationLink = loc => {
    const { lat, lng } = loc || {}

    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  }

  return (
    <>
      <StoreDetail>
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
          <div className="store-info">
            <div>
              <FbIcon className="fb-icon" />
              <span>
                <a href={fbLink} target="_blank" rel="noreferrer">
                  {name}
                  &nbsp;
                  <ExternalIcon size="15" />
                </a>
              </span>
            </div>
            <div>
              <MapIcon />
              <a
                href={generateLocationLink(mapLocation)}
                target="_blank"
                rel="noreferrer"
              >
                {location}
              </a>
              &nbsp;
              <ExternalIcon size="15" />
            </div>
            <div>
              <PhoneIcon />
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>
          {/* <Map /> // Feature for future */}
        </div>
      </StoreDetail>
    </>
  )
}

function StoreGridView(props) {
  const { categories, image, name } = props

  return (
    <StoreGrid>
      <p>{name}</p>
      <div className="store-image">
        <Image fluid={image.asset.fluid} />
      </div>
      <CategoryList>
        {categories.map((cat, i) =>
          i < 2 ? <li key={cat.id}>{cat.name}</li> : null
        )}
      </CategoryList>
    </StoreGrid>
  )
}

export function SingleStore(props) {
  const { isGrid } = props

  if (isGrid) {
    return <StoreGridView {...props} />
  }

  return <StoreDetailView {...props} />
}
