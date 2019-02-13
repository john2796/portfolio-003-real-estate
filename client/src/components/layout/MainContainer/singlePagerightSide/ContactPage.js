import React from "react";
import styled from "styled-components";
import {
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Button
} from "reactstrap";
const ContactPageStyle = styled.div`
  input {
    margin: 10px 0;
    font-size: 1.4rem;
    color: red;
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
`;

const ContactPage = () => {
  return (
    <ContactPageStyle>
      <Card>
        <CardBody>
          <CardTitle>Contact Me</CardTitle>
          <form>
            <Button>Schedule a showing ?</Button>
            <FormGroup />
            <Input type="text" name="Name" placeholder="Your Name" />
            <Input type="text" name="email" placeholder="Your Email" />
            <Input type="text" name="phone" placeholder="Your Phone" />
            <Input type="textarea" name="text" rows="10" />
            <Button style={{ padding: "10px 0" }}>SEND EMAIL</Button>
          </form>
        </CardBody>
      </Card>
    </ContactPageStyle>
  );
};

export default ContactPage;
