import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Full Stack JS Developer</Navbar.Brand>
                <Nav className="menu">                    
                    <Nav.Link href="#About">About Me</Nav.Link>                    
                    <Nav.Link href="#Certificates">Certificates</Nav.Link>
                    <Nav.Link href="#Skills">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </div>
    )
  }
}
export default NavBar