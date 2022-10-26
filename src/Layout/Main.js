import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/ShearPage/Header/Header';
import LeftNav from '../Pages/ShearPage/LeftSideNav/LeftNav';
import './Main.css'

const Main = () => {
    return (
        <div>
            <div className='d-lg-none'>
            <Header></Header>
            </div>
            <>
            <Row>
                <Col lg='3'>
                <LeftNav></LeftNav>
                </Col>
                <Col lg='9'>
                <Outlet></Outlet>
                </Col>
            </Row>
        </>
        </div>
        
    );
};

export default Main;