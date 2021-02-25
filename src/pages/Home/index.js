import React, { Component } from 'react';
import {useSelector} from 'react-redux';
import SearchPanel from '../../components/SearchPanel';
import AddForm from '../../components/AddForm';
import FoodCardsList from '../../components/FoodCardsList';
import {Row, Col, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import WithShopService from '../../components/hoc';
import './home.css';


const Home = () =>  {


        const searchPost = (items, term) => {
            if (term.length === 0) {
                return items 
            }

            return items.filter((item) => {
                return item.name.indexOf(term) > -1
            })
        }

        const foodItems =  useSelector(state => state.foodReducer.food);
        const term = useSelector(state => state.foodReducer.searchTerm);


        const visibleItems = searchPost(foodItems, term);


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
                    <FoodCardsList foodItems={visibleItems}/>
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