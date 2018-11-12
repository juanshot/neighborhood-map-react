import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
        <AppBar color="default" position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="default" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyBM8pLrHOpH9cd8WfNvly0GfSp2BkxEYl4"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          places={this.props.places}
          onOpenMarker={this.props.onOpenMarker}
          onCloseMarker={this.props.onCloseMarker}
        >

        </MapComponent>
      </div>
    );
  }
}

MapView.propTypes = {
  classes: PropTypes.object.isRequired,
  places: PropTypes.array.isRequired,
  onOpenMarker: PropTypes.func.isRequired,
  onCloseMarker: PropTypes.func.isRequired
};

export default withStyles(styles)(MapView);