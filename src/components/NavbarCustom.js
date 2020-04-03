import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

// Images
import Logo from '../assets/images/logo.svg'

const NavbarCustom = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home"><Image src={Logo} style={{ width: '25%' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarCustom
