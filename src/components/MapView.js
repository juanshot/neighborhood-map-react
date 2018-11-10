import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    </div>
  );
}

MapView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapView);