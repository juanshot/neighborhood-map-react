import React from 'react';
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

function MapView(props) {
  const { classes } = props;
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
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB8LnEaWIQrrSSiMs51uSDLrCD9gyxUp_U"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      >

      </MapComponent>
    </div>
  );
}

MapView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapView);