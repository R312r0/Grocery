import React from 'react';
import { useDispatch } from 'react-redux';
import {Row,Col} from 'reactstrap';
import {changeStatus} from '../../redux/actions';
import './foodcard.css';
const FoodCard = ({foodItem}) => {

    const {id, name, exist, price} = foodItem;

    const dispatch = useDispatch();

    const onChangeStatus = (id) => {
        dispatch(changeStatus(id));
    }

    return (
        <Col xs='12' className='d-flex justify-content-center'>
            <div className="card grocery-card">
                <div className="card-body">
                    <Row>
                        <Col xs='4'>{name} ({exist ? 'Exist' : 'Missing'})</Col>
                        <Col xs='8' className='d-flex justify-content-end'><button className='btn btn-success add-to-cart' onClick={() => onChangeStatus(id)}>Missing <i class="fas fa-question"></i></button> </Col>
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