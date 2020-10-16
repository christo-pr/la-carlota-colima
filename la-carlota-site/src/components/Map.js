import React from "react"
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps"

import { StyledMap } from "../styles"

const RCGMap = withScriptjs(
  withGoogleMap(props => {
    const coords = {
      lat: parseFloat("19.2551249"),
      lng: parseFloat("-103.723356"),
    }
    const zoom = 15

    return (
      <GoogleMap defaultZoom={zoom} defaultCenter={coords}>
        {props.isMarkerShown && (
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        )}
      </GoogleMap>
    )
  })
)

export function Map(props) {
  return (
    <RCGMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<StyledMap />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}
