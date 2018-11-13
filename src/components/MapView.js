import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MapComponent from './MapComponent'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 20,
  },
};

class MapView extends Component{
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyBM8pLrHOpH9cd8WfNvly0GfSp2BkxEYl4"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          places={this.props.places}
          onOpenMarker={this.props.onOpenMarker}
          onCloseMarker={this.props.onCloseMarker}
          iconBase={'https://maps.google.com/mapfiles/ms/icons/'}
        >

        </MapComponent>
      </div>
    );
  }
}

MapView.propTypes = {
  classes: PropTypes.object.isRequired, // classes from styles variable
  places: PropTypes.array.isRequired, // places from global state
  onOpenMarker: PropTypes.func.isRequired, // function that changes the state to showInfo to true
  onCloseMarker: PropTypes.func.isRequired, // function that changes the state to showInfo to false
};

export default withStyles(styles)(MapView);