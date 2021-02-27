
const INIT_STATE = {
    food: [],
    addFormText: '',
    addFormPrice: '0',
    searchTerm: '', 
    filter: 'all',
    
}

const foodReducer = (state=INIT_STATE, action) => {

    const id = action.payload;

    switch (action.type) {

        case 'LIST_REQUESTED':


            return {
                ...state
            }
        case 'LIST_LOADED': 

            return {
                ...state,
                food: action.payload
            }

        case 'CHANGE_STATUS':

          
          const itemIndex = state.food.findIndex(item => item.id === id)
          const item = state.food[itemIndex];

          const newItem = {
              id: item.id,
              title: item.title,
              exist: !item.exist,
              price: item.price

          }

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
                title: action.payload.title,
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
        case 'CHANGE_TERM':

            return {
                ...state,
                searchTerm: action.payload
            }
        case 'CHANGE_FILTER':
            
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }

}

export default foodReducer;