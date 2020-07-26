import { Action } from '@ngrx/store';

export enum UserActionTypes {
  ToggleMaskUsername = '[User] Toggle Mask Username'


}

export class ToggleMaskUsername implements Action {
  readonly type = UserActionTypes.ToggleMaskUsername;
}


export type UserActions = ToggleMaskUsername;
