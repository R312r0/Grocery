import React, { Component } from 'react';
import './add-form.css';

export default class AddForm extends Component {

    render() {
        return (
            <div className='form-wrapper'>
                <form className='add-form'>
                    <input type='text' className='form-control add-grocery' placeholder='Enter grocery name to add'/>
                    <button type='submit' className='btn btn-success add-grocery-button ml-5'> Add </button>
                </form>
            </div>
        )
    }

}