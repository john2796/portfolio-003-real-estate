import React, { Component } from "react";
import {
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import styled from "styled-components";
const SearchCardStyle = styled.div`
  input {
    margin: 10px 0;
    font-size: 1.4rem;
    padding: 20px 0;
    padding-left: 10px;
  }
  select {
    height: 40px;
    font-size: 1.4rem;
    padding: 20px 0;
    padding-left: 10px;
    margin-bottom: 1.2rem;
    color: #7d7d7d;
  }

  button {
    margin: 10px 0;
    width: 100%;
    font-size: 1.4rem;
    background: #fdcc01;
    border: none;
  }
  form {
    padding: 0 3%;
  }
  .search-text {
    font-size: 1.4rem;
    color: #6d6d6d;
  }
`;
class SearchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [100, 1500000]
    };
  }
  handleChange = value => {
    this.setState({
      value
    });
  };

  render() {
    return (
      <SearchCardStyle>
        <Card>
          <CardBody>
            <CardTitle>Advanced Search</CardTitle>
            <form>
              <FormGroup />
              <Input type="text" name="Name" placeholder="Type Keyword" />
              <Input type="select" name="types" className="select">
                <option>All Types</option>
                <option>Apartments (2)</option>
                <option>Condos (2)</option>
                <option>Houses (1)</option>
                <option>Industrial (1)</option>
              </Input>
              <Input type="select" name="types" className="select">
                <option>All Actions</option>
                <option>Rentals (8)</option>
                <option>Sales (5)</option>
              </Input>
              <Input type="select" name="types" className="select">
                <option>All Counties/States</option>
                <option>East California (7)</option>
                <option>Southern California (5)</option>
              </Input>
              <Input type="select" name="types" className="select">
                <option>All Cities</option>
                <option>Long Beach (7)</option>
                <option>Los Angeles (5)</option>
              </Input>
              <Input type="select" name="types" className="select">
                <option>All Areas</option>
                <option>Belmont (4)</option>
                <option>Bixby (2)</option>
                <option>Central LA (1)</option>
                <option>Harbor (1)</option>
                <option>Pomona Valley (1)</option>
              </Input>
              <Input type="select" name="types" className="select">
                <option>Min Bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Input>
              <Input type="select" name="types" className="select">
                <option>Min Baths</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Input>
              <Input type="text" name="Name" placeholder="Min Size in Ft." />
              <p className="search-text">
                Price range: ${this.state.value[0] || 100} to $
                {this.state.value[1] || 1500000}
              </p>
              <div>
                <Range
                  defaultValue={[100, 1500000]}
                  allowCross={false}
                  onChange={this.handleChange}
                  value={this.state.value}
                />
              </div>

              <p className="search-text">More Search Options</p>
              <Button style={{ padding: "10px 0" }}>SEARCH</Button>
            </form>
          </CardBody>
        </Card>
      </SearchCardStyle>
    );
  }
}

export default SearchCard;
