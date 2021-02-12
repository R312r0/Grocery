import React from 'react';
import FoodCard from '../../components/FoodCard';
import {Row, Col, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import './home.css';
const Home = () => {
    return (
        <>
            <Navbar>
                <Col xs='2'>
                    <NavbarBrand className='logo-text'>Welcome to grocery-shoping app <i class="fas fa-carrot"></i></NavbarBrand>
                </Col>
                <Col xs='10' className='d-flex justify-content-end'>
                        <Link to='/cart'><a href='#' className='shoping-cart'><i class="fas fa-shopping-cart"></i></a> </Link>
                </Col>
            </Navbar>
            <Row className='header-search'>
                <Col xs='12' className='d-flex justify-content-center'>
                    <input type='text' className='form-control search-grocery' placeholder='Enter a grocery to find'/>
                </Col>
            </Row>
            <Row className='cards-block'>
                <FoodCard/>
            </Row>
        </> 
    )
}

export default Home;