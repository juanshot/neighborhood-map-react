import React from 'react'
import PropTypes from 'prop-types'
import PlaceInfo from './PlaceInfo'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from 'react-google-maps'
import { compose } from 'recompose'

const MapComponent = compose(
    withScriptjs,
    withGoogleMap
)((props) => {
    return (
      <GoogleMap
          role="application"
          tabIndex='-1'
          defaultZoom={16}
          defaultCenter={{ lat: -2.900839, lng: -79.005317 }}
          >
          {props.places.length > 0 && props.places.map(place => (
              <Marker
                key={place.id}
                position={{ lat: place.lat, lng: place.lng }}
                icon={place.showInfo ? `${props.iconBase}blue-dot.png`: `${props.iconBase}red-dot.png`}
                onClick={() => {
                    props.onOpenMarker(place)
                }}
                >
                {place.showInfo && <InfoWindow onCloseClick={() => {
                    props.onCloseMarker(place)
                }}>
                    <div>
                        {place.name}
                        <PlaceInfo placeName={place.name}></PlaceInfo>
                    </div>
                </InfoWindow>}
              </Marker>
          ))}

      </GoogleMap>
    );
  })
MapComponent.propTypes = {
  places: PropTypes.array.isRequired, // places from global state
  onOpenMarker: PropTypes.func.isRequired, // function that changes the state to showInfo to true
  onCloseMarker: PropTypes.func.isRequired, // function that changes the state to showInfo to false
  iconBase: PropTypes.string.isRequired // url to get the marker icon
}

export default MapComponent;