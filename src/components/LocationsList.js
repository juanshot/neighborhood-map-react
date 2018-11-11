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
    backgroundColor: '#1f1d1d',
    height: '100vh',
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
    fontSize: '1.2em'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  locationsList: {
    backgroundColor: '#1f1d1d',
    color: 'inherit'
  },
});

class NestedList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

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
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
        />
        <List
          component="nav"
        >
          <Divider></Divider>
          {this.props.places.map(place => (
            <ListItem className={classes.locationItem} button>
              <ListItemIcon>
                <PlaceIcon style={{color: 'blue'}} />
              </ListItemIcon>
              <ListItemText
                  primary={<Typography type="body2" style={{ color: '#FFFFFF', fontSize: '1.2em', textTransform: 'uppercase' }}>{place.name}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
  places: PropTypes.array.isRequired
};

export default withStyles(styles)(NestedList);