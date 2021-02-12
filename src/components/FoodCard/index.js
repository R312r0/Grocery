import React from 'react';
import {Row,Col} from 'reactstrap';

import './foodcard.css';
const FoodCard = () => {
    return (
        <Col xs='12' className='d-flex justify-content-center'>
            <div className="card grocery-card">
                <div className="card-body">
                    <Row>
                        <Col xs='4'>Carrot </Col>
                        <Col xs='8' className='d-flex justify-content-end'><button className='btn btn-success add-to-cart'>Add <i class="fas fa-shopping-basket"></i></button> </Col>
                    </Row>
                    <Row>
                        <Col xs='4'>Price: 5$ </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}
export default FoodCard;