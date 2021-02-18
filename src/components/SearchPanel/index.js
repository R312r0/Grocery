import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    render() {
        return (
            <div className='search-form-wrapper'>
                <input type='text' className='form-control search-grocery' placeholder='Enter a grocery to find'/>
                <button className='btn btn-success search-panel-btns ml-3'> Exist </button>
                <button className='btn btn-success search-panel-btns'> Missing </button>
                <button className='btn btn-success search-panel-btns'> All </button>
            
            </div>
        )
    }

}