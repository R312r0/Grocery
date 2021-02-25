import React from 'react';
import {addToStore, changeInputValue, changeInputPrice} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

import './add-form.css';

export default function AddForm() {
    


    const dispatch = useDispatch();

    const inputValue = useSelector(state => state.foodReducer.addFormText);
    const inputValuePrice = useSelector(state => state.foodReducer.addFormPrice);

    function onTextChange(e) {
        dispatch(changeInputValue(e.target.value))
    }

    function onPriceChange(e) {
        dispatch(changeInputPrice(e.target.value))
    }

    function onSubmitAddForm (e) {
        e.preventDefault();
        dispatch(addToStore({
            name: inputValue,
            price: inputValuePrice
        }));
    }

    return (
        <div className='form-wrapper'>
            <form className='add-form' onSubmit={onSubmitAddForm}>
                <input type='text' onChange={onTextChange} className='form-control add-grocery' placeholder='Enter grocery name to add'
                value={inputValue}
                required
                />
                <input type='number' className='form-control add-grocery-price' placeholder='Enter price' 
                value={inputValuePrice}
                onChange={onPriceChange}
                required/>
                <button type='submit' className='btn btn-success add-grocery-button ml-5'> Add </button>
            </form>
        </div>
    )

}