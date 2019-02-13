import React, { Component } from "react";
import {
  Label,
  Input,
  FormGroup,
  Card,
  CardBody,
  CardTitle,
  Button,
  Collapse
} from "reactstrap";
import styled from "styled-components";
const MorgageCalculatorStyle = styled.div`
  input {
    margin-bottom: 10px;
    font-size: 1.4rem;
    padding: 20px 0;
    padding-left: 10px;
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
  label {
    color: #3e4a5c;
    font-size: 1.3rem;
  }
  .collapse-answer {
    p {
      font-size: 1.4rem;
      color: #333e4f;
    }
  }
`;

class MorgageCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      monthlyVal: 0,
      principle: 100000,
      interest: 6,
      termyear: 15
    };
  }
  _calculatorHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  _handleSubmit = e => {
    e.preventDefault();
    this.setState({ collapse: !this.state.collapse });
    let p = parseInt(this.state.principle.toString().replace(/\D/g, "")); //principle / initial amount borrowed
    let i =
      parseInt(this.state.interest.toString().replace(/\D/g, "")) / 100 / 12; //monthly interest rate
    let n = parseInt(this.state.termyear.toString().replace(/\D/g, "")) * 12; //number of payments months
    const m = (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    const res = Math.ceil(m);
    this.setState({ monthlyVal: res });
  };

  render() {
    console.log(this.state.principle);
    return (
      <MorgageCalculatorStyle>
        <Card>
          <CardBody>
            <CardTitle>Mortgage Calculator</CardTitle>
            <form onSubmit={this._handleSubmit}>
              <FormGroup />
              <Label>Sales Price</Label>
              <Input
                onChange={this._calculatorHandleChange}
                value={this.state.principle}
                type="text"
                name="principle"
                placeholder={this.state.principle}
              />
              <Label>Interest Rate in %</Label>
              <Input
                onChange={this._calculatorHandleChange}
                value={this.state.interest}
                type="text"
                name="interest"
                placeholder={this.state.interest}
              />
              <Label>Term (Years)</Label>
              <Input
                onChange={this._calculatorHandleChange}
                value={this.state.termyear}
                type="text"
                name="termyear"
                placeholder={this.state.termyear}
              />
              <Collapse
                isOpen={this.state.collapse}
                className="collapse-answer"
              >
                <p>
                  <strong>Mortgage Payments Monthly:</strong> $
                  {this.state.monthlyVal}
                </p>
              </Collapse>
              <Button type="submit" style={{ padding: "10px 0" }}>
                CALCULATE
              </Button>
            </form>
          </CardBody>
        </Card>
      </MorgageCalculatorStyle>
    );
  }
}

export default MorgageCalculator;
