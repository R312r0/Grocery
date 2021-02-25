import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeTerm} from '../../redux/actions';
import './search-panel.css';

export default function SearchPanel () {


    const inputValue = useSelector(state => state.foodReducer.searchTerm)

    const dispatch = useDispatch();

    const onChangeStatus = (e) => {
        dispatch(changeTerm(e.target.value));
    }


    return (
        <div className='search-form-wrapper'>
            <input type='text' className='form-control search-grocery' placeholder='Enter a grocery to find' onChange={onChangeStatus}/>
            <button className='btn btn-success search-panel-btns ml-3'> Exist </button>
            <button className='btn btn-success search-panel-btns'> Missing </button>
            <button className='btn btn-success search-panel-btns'> All </button>
        
        </div>
    )

}

