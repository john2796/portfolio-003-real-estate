import React, { Component } from "react";
import { connect } from "react-redux";
import MapPage from "./Map/MapPage";
import styled from "styled-components";
import PropertyContent from "./propertycontent/PropertyContent";
const PropertiesStyle = styled.div`
  .property-container {
    width: 100vw;
    border: 1px solid red;
    width: 100%;
    margin: 0 auto;
    display: flex;
  }
  .property-left {
    border: 1px solid blue;
    width: 50%;
    height: 100vh;

    font-weight: 500;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
  .property-right {
    border: 1px solid green;
    width: 100%;
  }
  .propright-title {
    font-size: 3rem;
    margin-left: 15px;
  }
  .card_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      margin: 10px;
    }
  }
`;

class Properties extends Component {
  render() {
    const filterData = this.props.data.filter((d, idx) => idx < 9);
    return (
      <PropertiesStyle>
        <div className="property-container ">
          <div className="property-left">
            <MapPage />
          </div>
          <div className="property-right">
            <h2 className="propright-title">Prop List Half Map</h2>
            <div className="card_container">
              {filterData.map((item, idx) => (
                <div key={idx}>
                  <PropertyContent items={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </PropertiesStyle>
    );
  }
}

const mapStateToProps = state => ({
  data: state.propertyReducer.data
});
export default connect(mapStateToProps)(Properties);
