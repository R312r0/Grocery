import React from 'react';
import {addToStore, changeInputValue, changeInputPrice} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import WithShopService from '../../components/hoc';

import './add-form.scss';

function AddForm(props) {
    
    const {ShopService} = props;

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
            title: inputValue,
            price: inputValuePrice
        }));
    }

    return (
            <form className='add-form' onSubmit={onSubmitAddForm}>
                <input type='text'
                className='name-input' 
                onChange={onTextChange} 
                placeholder='Enter grocery name to add'
                value={inputValue}
                required
                />
                <input type='number'
                className='price-input'  
                placeholder='$' 
                value={inputValuePrice}
                onChange={onPriceChange}
                required/>
                <button type='submit'> Add </button>
            </form>
    )

}

export default WithShopService()(AddForm);