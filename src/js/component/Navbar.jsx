import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navigationbar() {
  return(
    <div>
      <Navbar bg="dark" data-bs-theme="dark"  className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">start bootstrap</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">about</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigationbar;