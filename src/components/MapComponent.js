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
          defaultZoom={16}
          defaultCenter={{ lat: -2.900839, lng: -79.005317 }}
          >
          {props.places.length > 0 && props.places.map(place => (
              <Marker
                key={place.id}
                position={{ lat: place.lat, lng: place.lng }}
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
  places: PropTypes.array.isRequired,
  onOpenMarker: PropTypes.func.isRequired,
  onCloseMarker: PropTypes.func.isRequired
}

export default MapComponent;