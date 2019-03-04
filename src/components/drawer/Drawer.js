import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import NavList from "../nav-list/NavList";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class DrawerPage extends React.Component {
  render() {
    const { classes, toggleDrawer, left, className } = this.props;
    console.log(toggleDrawer, left);

    const sideList = (
      <div className={classes.list}>
        <NavList />
      </div>
    );

    return (
      <div className={className}>
        <Drawer open={left} onClose={toggleDrawer("left", false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerPage);
