import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import MapAndMarkers from "./propertyV2/MapAndMarkers";
import PaginationComponent from "./propertyV2/PaginationComponent";
import LocationCard from "./propertyV2/LocationCard";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import Typography from "@material-ui/core/Typography";
const styles = theme => ({
  root: {
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    display: "block",
    overflow: "hidden"
  },
  mapDiv: {
    height: "100%",
    width: "65%",
    display: "inline-block",
    position: "sticky",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  listGridDiv: {
    overflow: "auto",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  parentDiv: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    overflow: "hidden"
  },
  subTitleDiv: {
    marginTop: "150px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  subtitle: {
    marginTop: "35px"
  },
  planeIcon: {
    color: "#F44436",
    marginTop: 15,
    marginRight: 15,
    fontSize: 35
  },
  paginationSection: {
    height: "100px",
    margin: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }
});
class Properties extends Component {
  state = {
    currentPage: 1,
    hoveredCardId: "",
    mapShowing: true
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  setCardMarkerHover = location => {
    {
      this.setState({ hoveredCardId: location });
    }
  };
  resetCardMarkerHover = () => {
    this.setState({ hoveredCardId: "" });
  };
  toggleMapShowing = () => {
    this.setState({ mapShowing: !this.state.mapShowing });
  };
  render() {
    const { data, classes } = this.props;
    const { currentPage, mapShowing, hoveredCardId } = this.state;
    const resultPerPage = 30;
    const total = Math.ceil(data.length); //389
    const pageCount = Math.ceil(total / resultPerPage); //13
    const offset = (currentPage - 1) * resultPerPage;
    const locationsSlicedDownOnPage = data.slice(
      offset,
      offset + resultPerPage
    ); //30

    return (
      <div className={classes.root}>
        <div className={classes.parentDiv}>
          <Grid
            container
            className={classes.listGridDiv}
            justify={mapShowing ? "flex-start" : "space-evenly"}
          >
            {/* message on top of the map */}
            <div className={classes.subTitleDiv}>
              <FlightTakeoff color="secondary" className={classes.planeIcon} />
              <Typography
                variant="subtitle1"
                className={classes.subtitle}
                gutterBottom
              >
                Explore and Filter the New York Times recommended travel
                destinations since 2011.
              </Typography>
            </div>

            {/* LocationCard */}
            {locationsSlicedDownOnPage.map((location, index) => (
              <Grid key={index} item>
                <LocationCard
                  setCardMarkerHover={this.setCardMarkerHover}
                  resetCardMarkerHover={this.resetCardMarkerHover}
                  location={location}
                />
              </Grid>
            ))}

            {total > 20 && (
              <div className={classes.paginationSection}>
                <PaginationComponent
                  total={total}
                  resultsPerPage={resultPerPage}
                  pageCount={pageCount}
                  currentPage={currentPage}
                  handlePageChange={this.handlePageChange}
                  offset={offset}
                />
              </div>
            )}
          </Grid>

          {mapShowing && (
            <div className={classes.mapDiv}>
              <MapAndMarkers
                locations={locationsSlicedDownOnPage}
                hoveredCardId={hoveredCardId}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.propertyReducer.data
});
export default connect(mapStateToProps)(withStyles(styles)(Properties));
