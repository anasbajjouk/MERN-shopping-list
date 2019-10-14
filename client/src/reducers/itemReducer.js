import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const INITIAL_STATE = {
  items: [
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Butter' },
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Vodka' },
  ],
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default itemReducer;
