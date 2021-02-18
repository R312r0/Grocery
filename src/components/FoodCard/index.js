import React from 'react';
import {Row,Col} from 'reactstrap';

import './foodcard.css';
const FoodCard = ({foodItem}) => {

    const {id, name, status, price} = foodItem;

    return (
        <Col xs='12' className='d-flex justify-content-center'>
            <div className="card grocery-card">
                <div className="card-body">
                    <Row>
                        <Col xs='4'>{name} ({status})</Col>
                        <Col xs='8' className='d-flex justify-content-end'><button className='btn btn-success add-to-cart'>Missing <i class="fas fa-question"></i></button> </Col>
                    </Row>
                    <Row>
                        <Col xs='4'>Price: {price}$ </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}
export default FoodCard;