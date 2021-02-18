const INIT_STATE = {
    food: [
        {id: 1, name: 'Carrot', exist: true, price: '5'},
        {id: 2, name: 'Banana', exist: true, price: '10'},
        {id: 3, name: 'Bread', exist: true, price: '2.5'}

    ]
}

const foodReducer = (state=INIT_STATE, action) => {

    switch (action.type) {
        case 'CHANGE_STATUS':

          const id = action.payload;
          const itemIndex = state.food.findIndex(item => item.id === id)
          const item = state.food[itemIndex];

          const newItem = {
              id: item.id,
              name: item.name,
              exist: !item.exist,
              price: item.price

          }

          console.log(state);
        //   console.log(id + " This is id in reducer" + "  Existance :" + item.exist);
          return {...state, food: [
              ...state.food.slice(0, itemIndex),
              newItem,
              ...state.food.slice(itemIndex + 1)
          ]};

        default:
            return state;
    }

}

export default foodReducer;