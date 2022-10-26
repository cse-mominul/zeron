import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LeftNav from '../LeftSideNav/LeftNav';

const Header = () => {
    return (
        <>
     <Navbar bg="white" expand="lg">
      <Container>
        <div>
        <Navbar.Brand href="#home">Zeron</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div className='d-lg-none'>
            <LeftNav></LeftNav>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
};

export default Header;