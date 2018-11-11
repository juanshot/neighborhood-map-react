import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap( (props) => {
  return (
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: -2.900839, lng: -79.005317 }}
        >
        {props.places.length > 0 && props.places.map(place => (
            <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }} />
        ))}

    </GoogleMap>
  );
}))
MapComponent.propTypes = {
  places: PropTypes.array.isRequired
}

export default MapComponent;