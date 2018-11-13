import React from 'react';
import PropTypes from 'prop-types';
// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlaceIcon from '@material-ui/icons/Place';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    color: 'white'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  topBar: {
    width: '100%',
    backgroundColor: '#1f1d1d',
    color: 'white'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 2,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    fontSize: '1.5em',
    border: 'border: 1px solid white'
  },
  inputInput: {
    paddingTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5,
    transition: theme.transitions.create('width'),
    width: '100%',
    border: 'groove'
  },
  locationsList: {
    backgroundColor: '#1f1d1d',
    color: 'inherit'
  },
  listIcon: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
});

class PlacesList extends React.Component {
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  }
  emmitQuery = (event) => {
    this.props.setFilterValue(event.target.value)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.topBar} position="static">
          <Toolbar>
            <Typography  variant="h5" color="inherit">
                Cuenca Locations
            </Typography>
          </Toolbar>
        </AppBar>
        <InputBase
            tabIndex="0"
            placeholder="Search Place…"
            onChange={this.emmitQuery}
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
        />
        <List
          component="nav"
        >
          <Divider></Divider>
          {this.props.places.sort((prev, next) => prev.id - next.id).map(place => (
            <ListItem
              onClick={() => {
                if (!place.showInfo){
                  this.props.onOpenMarker(place)
                } else {
                  this.props.onCloseMarker(place)
                }
              }}
              key={place.id}
              className={classes.locationItem}
              button
            >
              <ListItemIcon
                className={classes.listIcon}
              >
                <PlaceIcon style={{color: place.showInfo ? 'blue': 'red'}} />
              </ListItemIcon>
              <ListItemText
                  primary={<Typography type="display2" style={{ color: '#FFFFFF', fontSize: '1.2em', textTransform: 'uppercase' }}>{place.name}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

PlacesList.propTypes = {
  classes: PropTypes.object.isRequired, // classes from styles variable
  places: PropTypes.array.isRequired, // places from global state
  setFilterValue: PropTypes.func.isRequired, // function that sends input search value
  onOpenMarker: PropTypes.func.isRequired, // function that changes the state to showInfo to true
  onCloseMarker: PropTypes.func.isRequired // function that changes the state to showInfo to false
};

export default withStyles(styles)(PlacesList);