import { createStore } from 'redux';
import data from './data';
const initialState={
  data: 'Hello world',
}

const rootReducer=(state =initialState, action) => {
  switch(action.type){
    case 'ADD_DATA':
      return{
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}

export default createStore(rootReducer);