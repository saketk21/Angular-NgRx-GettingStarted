import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.actions';


export const userFeatureKey = 'user';

export interface UserState {
  maskUserName: boolean;
}

export const initialState: UserState = {
  maskUserName: false
};

export function reducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case UserActionTypes.ToggleMaskUsername:
      return {
        ...state,
        maskUserName: !state.maskUserName
      };
    default:
      return state;
  }
}
