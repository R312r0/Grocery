import React, {Component} from 'react';


export default class GroceryListItem extends Component {

    



    render() {

        const {label, ranOut, priority, onDelete, onAviability} = this.props;

        let availability = ["Have", "text-success", "fas fa-check"];
        let buttonClases = ["btn btn-danger", "fas fa-times"];

        if (ranOut) {
            availability[0] = "Run out";
            availability[1] = "text-danger";
            availability[2] = "fas fa-times";

            buttonClases[0] = "btn btn-success";
            buttonClases[1] = "fas fa-check";
        }

        return(
            <>
            <div className='row'>
                <div className='col-3 d-flex justify-content-start'>
                     <h5> {label} </h5>             
                </div>
                <div className='col-3 d-flex justify-content-start'>
                    <h5><b className={availability[1]}>
                        {availability[0]}<i className={availability[2]}></i>
                        </b>
                    </h5>
                </div>
                <div className='col-3 d-flex justify-content-start'> 

                    <button className={buttonClases[0]} onClick={onAviability}><i className={buttonClases[1]}></i> </button>
                    <button className='btn btn-warning' onClick={onDelete}> tT</button>
                </div>
                <div className='col-3 d-flex justify-content-start'>
                    <div className='col-6'>
                        <p>Priority: {priority} </p>
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-secondary'> Change </button>
                    </div>
                </div>
                
            </div>
            </>
        )
    }
}