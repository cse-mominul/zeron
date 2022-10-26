import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footerweb from '../Pages/ShearPage/Footer/Footerweb';
import LeftNav from '../Pages/ShearPage/LeftSideNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col lg='4'>
                <LeftNav></LeftNav>
                </Col>
                <Col lg='8'>
                <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        <Footerweb></Footerweb>
        </div>
        
    );
};

export default Main;