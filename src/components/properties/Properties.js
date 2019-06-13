import React, { Component, lazy, Suspense } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import MapAndMarkers from "./propertyV2/MapAndMarkers";
import PaginationComponent from "./propertyV2/PaginationComponent";

const LocationCardLz = lazy(() => import("./propertyV2/LocationCard"));
const styles = theme => ({
  root: {
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    display: "block",
    overflow: "hidden"
  },
  mapDiv: {
    height: "88vh",
    width: "68%",
    display: "inline-block",
    position: "sticky",
    border: "12px solid white",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  listGridDiv: {
    overflow: "auto",
    height: "85vh",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      width: "417px",
      padding: "20px 27px"
    }
  },
  parentDiv: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    overflow: "hidden"
  },
  subTitleDiv: {
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
    this.setState({ hoveredCardId: location.pageid });
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
    const resultPerPage = 10;
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
            <Suspense fallback={<div>loading ..</div>}>
              {locationsSlicedDownOnPage.map((location, index) => (
                <Grid key={index} item>
                  <LocationCardLz
                    setCardMarkerHover={this.setCardMarkerHover}
                    resetCardMarkerHover={this.resetCardMarkerHover}
                    location={location}
                  />
                </Grid>
              ))}
            </Suspense>

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
