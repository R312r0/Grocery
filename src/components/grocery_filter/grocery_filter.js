import React, {Component} from 'react';


export default class GroceryFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.buttons = [
            {name: 'have', label: 'Have' },
            {name: 'ran out', label: 'Ran out'},
            {name: 'all', label: 'Show all'}

        ]

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }


    render() {

        const buttons = this.buttons.map(({name, label}) => {

            const active = this.props.filter === name;

            const clazz = active ? "btn-info" : "btn-outline-secondary";

            return (
                <button
                 key={name}
                  className={`btn ${clazz} ml-1`}
                  onClick={() => this.props.onFilterSelect(name)}
                  >{label} </button>
            )
        })

        return(
            <>
                <div className='row mt-5'> 
                    <div className='col-7'>
                        <input type='text'className='form-control' 
                        placeholder='Enter a grocery to search'
                        onChange={this.onUpdateSearch}
                        />     
                    </div>
                    <div className='col-5'> 
                        {buttons}
                    </div>
                </div> 
                <div className='row mt-3'>
                    <div className='col-12 d-flex justify-content-center'>
                        <button className='btn btn-secondary w-50' onClick={this.props.onSortGrocery}> Sort </button>
                    </div>
                </div>
            </>
        )
    }

}