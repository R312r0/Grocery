import React, {Component} from 'react';
import './grocery_add_form.css';
export default class GroceryAddForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            pr : 1,
            ranOut: '',
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.onOutChange = this.onOutChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    onStatusChange(e) {
        this.setState({
            pr: e.target.value
        })
    }
    onOutChange(e) {
        console.log(e.target.checked)
        console.log(typeof(e.target.checked))
        this.setState({
            ranOut: e.target.checked
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text, this.state.pr, this.state.ranOut)
        this.setState({
            text: '',
            pr: 1, 
        })
        
    }

    render() {

        return(
            <>
            <form className='d-flex add-grocery-form mt-5' onSubmit = {this.onSubmit}>
                <div className='col-4 d-flex justify-content-start'> 
                    <input type='text' onChange={this.onValueChange} className='form-control' placeholder='Enter a grocery' value={this.state.text}/>
                </div>
                    <div className='col-4 d-flex justify-content-end'>
                        <label htmlFor="exampleFormControlSelect1">Priority</label>
                            <select onChange={this.onStatusChange} className="form-control ml-3" id="exampleFormControlSelect1" value={this.state.pr}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                    </div>
                    <div className='col-2'>
                        <label  htmlFor="existance">Ran out?</label>
                        <input type="checkbox" className="form-check-input ml-3" id="existance" onChange={this.onOutChange}></input>
                            
                    </div>
                    <div className='col-2 d-flex justify-content-start'>
                        <button className='btn btn-success'type='submit'> Add </button>
                    </div>
            </form>

            </>
        ) 
    }
}