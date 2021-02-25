
const INIT_STATE = {
    food: [
        {id: 1, name: 'Carrot', exist: true, price: '5'},
        {id: 2, name: 'Banana', exist: true, price: '10'},
        {id: 3, name: 'Bread', exist: true, price: '2.5'}

    ], 
    addFormText: '',
    addFormPrice: '0'
    
}

const foodReducer = (state=INIT_STATE, action) => {

    const id = action.payload;

    switch (action.type) {
        case 'CHANGE_STATUS':

          
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
        case 'DELETE_FROM_STORE':
            const deleteItemIndex = state.food.findIndex(item => item.id === id);
            
            return {
                ...state,
                food: [
                    ...state.food.slice(0, deleteItemIndex),
                    ...state.food.slice(deleteItemIndex + 1)
                ]
            }

        case 'ADD_TO_STORE':

            const newProduct = {
                id: `_${Math.random().toString(36).substr(2, 9)}`,
                name: action.payload.name,
                exist: true,
                price: action.payload.price
            }

            return {
                ...state,
                food: [
                    ...state.food,
                    newProduct
                ],
                addFormText: '',
                addFormPrice: '0',
            }
        case 'CHANGE_INPUT_TEXT':

            return {
                ...state,
                addFormText: action.payload
            }

        case 'CHANGE_INPUT_PRICE':

            return {
                ...state,
                addFormPrice: action.payload
            }

        default:
            return state;
    }

}

export default foodReducer;