import React from "react";
// import Logo from '../images/blue moon7.jpg'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import blueMoonIMG from "../images/blue moon7.jpg";
const Header = () => {

const [open]

  return (
    <div className="hello">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="justify-content-lg-center">
        <div className="d-lg-flex " >
          <Navbar.Brand href="#" >
            <img src={blueMoonIMG} alt="" width={80} height={80} />
          </Navbar.Brand>
          <Navbar />
          {/* <Navbar.Collapse id=""> */}
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/room">Rooms</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/amenities">Amenities</Nav.Link>
            </Nav>
            <Form >
              <Button variant="outline-success">BLUEMOON HOMESTAY</Button>
            </Form>
          {/* </Navbar.Collapse> */}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
