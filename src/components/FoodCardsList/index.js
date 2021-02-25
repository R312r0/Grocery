import React from 'react';
import FoodCard from '../FoodCard'

export default function FoodCardsList({foodItems}) {


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