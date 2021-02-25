import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeTerm, changeFilter} from '../../redux/actions';
import './search-panel.css';

export default function SearchPanel () {


    const inputValue = useSelector(state => state.foodReducer.searchTerm)

    const dispatch = useDispatch();

    const onChangeStatus = (e) => {
        dispatch(changeTerm(e.target.value));
    }

    const onChangeFilter = (filter) => {
        dispatch(changeFilter(filter))
    }


    return (
        <div className='search-form-wrapper'>
            <input type='text' className='form-control search-grocery' placeholder='Enter a grocery to find' onChange={onChangeStatus}/>
            <button onClick={() => onChangeFilter('exist')} className='btn btn-success search-panel-btns ml-3'> Exist </button>
            <button onClick={() => onChangeFilter('missing')} className='btn btn-success search-panel-btns'> Missing </button>
            <button onClick={() => onChangeFilter('all')} className='btn btn-success search-panel-btns'> All </button>
        
        </div>
    )

}

