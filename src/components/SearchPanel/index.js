import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeTerm, changeFilter} from '../../redux/actions';
import './search-panel.scss';

export default function SearchPanel () {




    const dispatch = useDispatch();

    const onChangeStatus = (e) => {
        dispatch(changeTerm(e.target.value));
    }

    const onChangeFilter = (filter) => {
        dispatch(changeFilter(filter))
    }


    return (
        <div className='search-panel'>
            <input type='text' placeholder='Enter a grocery to find' onChange={onChangeStatus}/>
            <button onClick={() => onChangeFilter('exist')}> Exist </button>
            <button onClick={() => onChangeFilter('missing')}> Missing </button>
            <button onClick={() => onChangeFilter('all')}> All </button>
        
        </div>
    )

}

