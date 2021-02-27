import React from 'react';
import { useDispatch } from 'react-redux';
import {changeStatus, deleteFromStore} from '../../redux/actions';
import './food-card.scss';
const FoodCard = ({foodItem}) => {

    const {id, name, exist, price} = foodItem;

    const dispatch = useDispatch();

    const iconClassName = exist ? 'fas fa-question' : 'fas fa-check';

    const onChangeStatus = (id) => {
        dispatch(changeStatus(id));
    }

    const onDeleteItem = (id) => {
        dispatch(deleteFromStore(id));
    }

    return (
        <>
            <span> {name} ({exist ? 'Exist' : 'Missing'})</span>
            <div className='button-block'>

                <button onClick={() => onChangeStatus(id)}>{exist ? 'Missing' : 'Exist'}<i className={iconClassName}></i></button>
            </div>
            <a href="#" className='times' onClick={() => onDeleteItem(id)}> x </a>
            <span> Price: {price}$ </span>
        </>
    )
}
export default FoodCard;