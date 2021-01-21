import React, {Component} from 'react';
import GroceryListItem from '../grocery_list_item';

export default class GroceryList extends Component {

    

    render() {

        const {groceries, onDelete, onAviability} = this.props;

        const elements = groceries.map((item) => {

            const {id} = item;

            return (
                <li key={id} className='list-group-item'>
                    <GroceryListItem label={item.label} 
                    ranOut={item.ranOut}  
                    priority={item.priority}
                    onDelete={() => onDelete(id)}
                    onAviability={() => onAviability(id)}
                    />
                </li>
            )
        });
        return(
            <>
            <ul className='grocery-list list-group mt-4'>
    
                {elements}
    
            </ul>
            </>
        )
    }

}
