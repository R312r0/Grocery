import React from 'react';
import FoodCard from '../FoodCard'
import './food-card-list.scss';

export default function FoodCardsList({foodItems}) {


    const elements = foodItems.map((item) => {
        return <li>
            <FoodCard key={item.id} foodItem={item}/>
          </li>
    })

    return(
      
      <ul> 
        {elements}
      </ul>
    )

}