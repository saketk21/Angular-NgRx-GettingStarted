import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
}


export type ProductActions = ToggleProductCode;
