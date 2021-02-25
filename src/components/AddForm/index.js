import React from 'react';
import {addToStore, changeInputValue} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

import './add-form.css';

export default function AddForm() {
    


    const dispatch = useDispatch();

    const inputValue = useSelector(state => state.foodReducer.addFormText);

    const addNewItem = () => {
        dispatch(addToStore())
    }
    function onValueChange(e) {
        dispatch(changeInputValue(e.target.value))
    }

    function onSubmitAddForm (e) {
        e.preventDefault();
        addNewItem();
    }

    return (
        <div className='form-wrapper'>
            <form className='add-form' onSubmit={onSubmitAddForm}>
                <input type='text' onChange={onValueChange} className='form-control add-grocery' placeholder='Enter grocery name to add'
                value={inputValue}
                />
                <button type='submit' className='btn btn-success add-grocery-button ml-5'> Add </button>
            </form>
        </div>
    )

}