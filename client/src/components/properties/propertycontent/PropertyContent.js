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
import { Link } from "react-router-dom";
import { getSingleListId } from "../../../store/actions/listingAction";
import styled from "styled-components";
import CardCarousel from "../CardCarousel";
const PropertyContentStyle = styled.div`
  .property-card {
    border: 3px solid green;
    max-width: 250px;
    margin: 0 3%;
  }
  .card-carousel {
    max-height: 250px;
    min-height: 250px;
  }
`;
class PropertyContent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    let id = 1;
    return (
      <PropertyContentStyle>
        <Card className="property-card">
          <div className="carousel-info-parent">
            <div className="carousel-info">
              <p className="rentals ">Rentals</p>
              <div>
                <i className="far fa-heart" id="favorites-heart" />
                <Tooltip
                  placement="top"
                  isOpen={this.state.tooltipOpen}
                  target="favorites-heart"
                  toggle={this.toggle}
                >
                  add to <br /> favorites
                </Tooltip>
              </div>
            </div>
            <div className="card-carousel">
              <CardCarousel />
            </div>
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
      </PropertyContentStyle>
    );
  }
}

const mapStateToProps = state => ({
  data: state.propertyReducer.data
});

export default connect(
  mapStateToProps,
  { getSingleListId }
)(PropertyContent);
