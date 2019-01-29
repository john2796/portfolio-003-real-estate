import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Tooltip
} from "reactstrap";
import { getSingleListId } from "../../../../store/actions/listingAction";
import { Link } from "react-router-dom";

class ListingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  next = () => {
    const { images } = this.props;
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState((state, props) => {
      return { activeIndex: (state.activeIndex = nextIndex) };
    });
  };
  previous = () => {
    const { images } = this.props;
    const nextIndex =
      this.state.activeIndex === 0
        ? images.length - 1
        : this.state.activeIndex - 1;
    this.setState((state, props) => {
      return { activeIndex: (state.activeIndex = nextIndex) };
    });
  };
  render() {
    const { images, tooltipOpen, toggle, id } = this.props;
    if (!images) {
      return <span>listings currently not available</span>;
    }
    const slides = images.map((item, index) => {
      let computedClass =
        index === this.state.activeIndex ? "slide active" : "slide";
      return (
        <div key={item.src} className={computedClass}>
          <div
            className="carousel-parent"
            style={{ backgroundImage: `url(${item.src})`, height: 320 }}
            alt={item.altText}
          />
        </div>
      );
    });

    return (
      <>
        <Card>
          <div className="carousel-info-parent">
            <div className="carousel-info">
              <p className="rentals ">Rentals</p>
              <div>
                <i className="far fa-heart" id="favorites-heart" />
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target="favorites-heart"
                  toggle={toggle}
                >
                  add to <br /> favorites
                </Tooltip>
              </div>
              <div className="carousel-controls">
                <i onClick={this.previous} className="fas fa-chevron-left" />
                <i onClick={this.next} className="fas fa-chevron-right" />
              </div>
            </div>
            {slides}
          </div>
          <Link
            to={`/listing/${id}`}
            onClick={() => this.props.getSingleListId(id)}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardBody>
              <CardTitle>Luxury Villa In Rego Park</CardTitle>
              <CardSubtitle> $ 2,100 / month</CardSubtitle>
              <CardText>
                Just steps away from QM2 express bus to Manhattan and local
                buses; only minutes from the LIRR. Walki [more]
              </CardText>

              <div className="property_listing_details">
                {" "}
                <span className="infobath_unit_type2">
                  <i className="fas fa-tint" />4
                </span>{" "}
                <span className="infogarage_unit_type2">
                  <i className="fas fa-car" />
                  10
                </span>{" "}
                <span className="infosize_unit_type2">
                  <i className="far fa-map" />5 000,00 ft<sup>2</sup>
                </span>
              </div>

              <div className="property-location">
                <div className="property-name">
                  <img
                    src="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/agent2-1-120x120.jpg"
                    alt=""
                  />
                  <h5>Michael Suttherland</h5>
                </div>
                <span className="property-share">
                  <i className="fas fa-share-alt" />
                  <i className="fas fa-plus" />
                </span>
              </div>
            </CardBody>
          </Link>
        </Card>
      </>
    );
  }
}
export default connect(
  null,
  { getSingleListId }
)(ListingCard);
