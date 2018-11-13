import React, {Component} from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import MapView from './components/MapView'
import LocationsList from './components/LocationsList'
import places from './placesData/places'

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('xs')]: {
      width: drawerWidth / 2,
      fontSize: '0.8em',
    },
    backgroundColor: '#1f1d1d'
  },
  content: {
    flexGrow: 1
  },
});

class App extends Component {
  state = {
    mobileOpen: false,
    places
  }
  // function that open/ closes drawer
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }
  // receives query from LocationList component and filter the state
  filterPlaces = (query) => {
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      this.setState({
        places: this.state.places.filter((place) => {
          return match.test(place.name)
        })
      })
    } else {
      this.setState({
        places
      })
    }
  }
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              className={classes.menuButton}
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
                <LocationsList
                  setFilterValue={this.filterPlaces}
                  places={this.state.places}
                  onOpenMarker={(openPlace) => {
                      openPlace.showInfo = true
                      this.setState((state) => ({
                      places: state.places.filter((place) => place.id !== openPlace.id).concat(openPlace)
                      }))
                  }}
                  onCloseMarker={(closePlace) => {
                      closePlace.showInfo = false
                      this.setState((state) => ({
                      places: state.places.filter((place) => place.id !== closePlace.id).concat(closePlace)
                      }))
                  }}
                >
                </LocationsList>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <LocationsList
                  setFilterValue={this.filterPlaces}
                  places={this.state.places}
                  onOpenMarker={(openPlace) => {
                      openPlace.showInfo = true
                      this.setState((state) => ({
                      places: state.places.filter((place) => place.id !== openPlace.id).concat(openPlace)
                      }))
                  }}
                  onCloseMarker={(closePlace) => {
                      closePlace.showInfo = false
                      this.setState((state) => ({
                      places: state.places.filter((place) => place.id !== closePlace.id).concat(closePlace)
                      }))
                  }}
                >
              </LocationsList>
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <MapView
            onOpenMarker={(openPlace) => {
              openPlace.showInfo = true
              this.setState((state) => ({
                places: state.places.filter((place) => place.id !== openPlace.id).concat(openPlace)
              }))
            }}
            onCloseMarker={(closePlace) => {
              closePlace.showInfo = false
              this.setState((state) => ({
                places: state.places.filter((place) => place.id !== closePlace.id).concat(closePlace)
              }))
            }}
            onToggleDrawer={(value) => {
              console.log('si llega', value)
              this.setState({
                mobileOpen: value
              })
            }}
            places={this.state.places}
            mobileOpen={this.state.mobileOpen}
            >
          </MapView>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);