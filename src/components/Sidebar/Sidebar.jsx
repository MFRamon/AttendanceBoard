import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import {
  getClassrooms,
  getGeofences,
} from "../../helpers/querys";
import { updateGeofence } from "../../helpers/querys";
import Profesor from '../Professor/Professor';
import Header from '../Header/Header'

const drawerWidth = 280;

const Sidebar = ({data}) => {

  const classes = useStyles();

  const showGeofence = () => {

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>

          { data.map((p, i) => (
            <ListItem> 
              <Profesor name={p.name} image={p.image} active={true} status={true}/>
            </ListItem>
          )) }

          <ListItem>
            <Profesor active={true} status={true}/>
          </ListItem>
          <ListItem>
            <Profesor status={false}/>
          </ListItem>

          <ListItem>
            <input
              type="button"
              value="Click"
              onClick={() => getClassrooms()}
            />
          </ListItem>
          <ListItem>
            <input type="button" value="Click" onClick={() => getGeofences()} />
          </ListItem>
          <ListItem>
            <input
              type="button"
              value="Click"
              //onClick={() => getClassroomsNames()}
            />
          </ListItem>
          <ListItem>
            <input type="button" value="Try" onClick={() => updateGeofence()} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1
  },
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar
}));
