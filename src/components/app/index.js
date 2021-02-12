import React from 'react';
import {Container, Row, Col, Navbar, NavbarBrand} from 'reactstrap';
import './app.css';
const App = () => {
    return (
        <Container>
            <Navbar>
                    <Col xs='2'>
                        <NavbarBrand className='logo-text'>Welcome to grocery-shoping app <i class="fas fa-carrot"></i></NavbarBrand>
                    </Col>
                    <Col xs='10' className='d-flex justify-content-end'>
                            <a href='#' className='shoping-cart'><i class="fas fa-shopping-cart"></i></a>
                    </Col>
            </Navbar>
            <Row className='header-search'>
                <Col xs='12' className='d-flex justify-content-center'>
                    <input type='text' className='form-control search-grocery' placeholder='Enter a grocery to find'/>
                </Col>
            </Row>
        </Container>
    )
}

export default App;