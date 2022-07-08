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
        times: [action.payload, ...state.times],
      };

    case ActionType.DELETE_TIME:
      return {
        times: [...state.times].filter(time => (
          time.id !== action.payload.id)
        )
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
