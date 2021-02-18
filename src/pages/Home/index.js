import React, { Component } from 'react';
import {useSelector} from 'react-redux';
import SearchPanel from '../../components/SearchPanel';
import AddForm from '../../components/AddForm';
import FoodCard from '../../components/FoodCard';
import {Row, Col, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import WithShopService from '../../components/hoc';
import './home.css';


const Home = () =>  {

    

        const foodItems =  useSelector(state => state.foodReducer.food);

        const content = foodItems.map((foodItem) => {
            return <FoodCard
                key={foodItem.id}
                foodItem={foodItem}
            />
        })

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
                        <SearchPanel/>
                    </Col>
                </Row>
                <Row className='cards-block'>
                    {content}
                </Row>

                <Row className='grocery__addform'>
                    <Col xs='12' className='d-flex justify-content-center'>
                        <AddForm/>
                    </Col>
                </Row>
            </> 
        )

}

export default WithShopService()(Home);