import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import MapView from './components/MapView'
import LocationsList from './components/LocationsList'
import places from './data/places'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  state = {
    places
  }
  classes = this.props.classes
  render () {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <LocationsList places={places}></LocationsList>
          </Grid>
          <Grid item xs={9}>
              <MapView places={places}></MapView>
          </Grid>
        </Grid>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);