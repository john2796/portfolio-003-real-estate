import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Launch from "@material-ui/icons/Launch";
import CardCarousel from "../propertyV2/CardCarousel";
const styles = theme => ({
  card: {
    width: 340,

    boxShadow: "none",
    margin: "0px 5px"
  },
  media: {
    height: 220,
    objectFit: "cover",
    borderRadius: 5
  },

  cardContentArea: {
    padding: "4px 0px",
    "&:last-child": {
      paddingBottom: 0
    },
    marginBottom: 20
  },
  year: {
    backgroundColor: "#A61D55",
    borderRadius: "3.2px",
    color: "white",
    padding: "0 4px"
  },
  yearArea: {
    textTransform: "uppercase",
    color: "#A61D55",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: "16px",
    paddingTop: 4
  },
  launchicon: {
    fontSize: 12
  },
  articleLink: {
    textDecoration: "none",
    color: "#A61D55"
  },
  CarouselDiv: {
    height: 190,
    objectFit: "cover",
    borderRadius: 5
  }
});

class LocationCard extends React.Component {
  render() {
    const { classes, location } = this.props;

    return (
      <Card
        className={classes.card}
        onMouseEnter={e => this.props.setCardMarkerHover(location)}
        onMouseLeave={e => this.props.resetCardMarkerHover()}
      >
        <div className={classes.CarouselDiv}>
          <CardCarousel location={location} />
        </div>
        <CardContent className={classes.cardContentArea}>
          <Typography noWrap className={classes.yearArea} component="p">
            Featured in: <span className={classes.year}>{location.year}</span> ·{" "}
            <a
              href={location.article_link}
              className={classes.articleLink}
              target="_blank"
            >
              Original Article <Launch className={classes.launchicon} />
            </a>
          </Typography>
          <Typography variant="h6" component="h2">
            {location.location_name}
          </Typography>
          <div className={classes.snippet_area}>
            <Typography className={classes.snippet_text} noWrap component="p">
              {location.clean_snippet}
            </Typography>
            <Typography component="p">
              <a
                href={location.url}
                style={{
                  textDecoration: "none",
                  color: "#008489",
                  fontWeight: 600,
                  fontSize: 12
                }}
                className={classes.articleLink}
                target="_blank"
              >
                Learn More
              </a>
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

LocationCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationCard);
