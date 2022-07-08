import { Time } from '../react-app-env';

export enum ActionType {
  ADD_TIME = 'ADD_TIME',
  DELETE_TIME = 'DELETE_TIME',
}

export type Action = DeleteTimeAction | AddTodoAction;

export interface AddTodoAction {
  type: ActionType.ADD_TIME,
  payload: Time,
}

export interface DeleteTimeAction {
  type: ActionType.DELETE_TIME,
  payload: Time,
}


export const addTimeActions = (payload: Time): Action => ({
  type: ActionType.ADD_TIME,
  payload,
});

export const deleteTimeActions = (payload: Time): Action => ({
  type: ActionType.DELETE_TIME,
  payload,
});


// export function updateTimer({timerState, id}) {
//   return {type: UPDATE_TIMER, timerState, id}
// }

// export function stopTimer({timerState, id}) {
//   return {type: STOP_TIMER, timerState, id}
// }
