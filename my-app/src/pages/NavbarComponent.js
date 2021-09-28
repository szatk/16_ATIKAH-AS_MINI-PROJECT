import React from 'react'
import {Nav,NavDropdown,Navbar,Form,Button,Container} from 'react-bootstrap'
import logo from '../assets/img/InShot_20210926_000503168-removebg-preview (2).png'
import styles from '../assets/css/navbar.css'


const NavbarComponent = () => {
    return (
        <>
        <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img className="my-img" src={logo} alt="profile-pic justify-content-center" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
    );
};

export default NavbarComponent;
