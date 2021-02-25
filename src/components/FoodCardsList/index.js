import React from 'react';
import FoodCard from '../FoodCard'

export default function FoodCardsList({foodItems}) {

    console.log(foodItems[0]);

    const elements = foodItems.map((item) => {
        return <FoodCard
        key={item.id}
        foodItem={item}
    />
    })

    return(
      <> 
        {elements}
      </>
    )

}