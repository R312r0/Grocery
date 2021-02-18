const INIT_STATE = {
    food: [
        {id: 1, name: 'Carrot', status: 'Exist', price: '5'},
        {id: 2, name: 'Banana', status: 'Exist', price: '10'},
        {id: 3, name: 'Bread', status: 'Exist', price: '2.5'}

    ]
}

const foodReducer = (state=INIT_STATE, action) => {

    switch (action.type) {
        case 'CHANGE_STATUS':
          const id = action.payload;
          const item = state.food.find(item => item.id === id)
          const itemIndex = state.food.findIndex(item => item.id === id)
          const newItem = {
              id: item.id,
              name: item.id,
              status: !item.status,
              price: item.price
          }

          return {
              ...state,
              food: [
                ...state.food.slice(0, itemIndex),
                newItem,
                ...state.food.slice(itemIndex, + 1)
              ]
          }

        default:
            return state;
    }

}

export default foodReducer;