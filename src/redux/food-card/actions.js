export const changeStatus = (id) => ({type: 'CHANGE_STATUS', payload: id});
export const deleteFromStore = (id) => ({type: 'DELETE_FROM_STORE', payload: id});
export const addToStore = (obj) => ({type: 'ADD_TO_STORE', payload: obj});
export const changeInputValue = (str) => ({type: 'CHANGE_INPUT_TEXT', payload: str});
