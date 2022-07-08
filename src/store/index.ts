import { createStore } from 'redux';
import { State } from '../react-app-env';
import { Action, ActionType } from './actions';

export const initialState: State = {
  times: [],
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TIME:
      return {
        times: [...state.times, action.payload],
      };

    case ActionType.DELETE_TIME:
      return {
        // times: [...state.times].filter(),
        // filter by id to delete need timeItem
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
