import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  LoadProductsSuccess = '[Product] Load Products Success',
  LoadProductsFailure = '[Product] Load Products Failure',
  ToggleProductCode = '[Product] Toggle Product Code',
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductsSuccess;
  constructor(public payload: Product[]) {}
}

export class LoadProductsFailure implements Action {
  readonly type = ProductActionTypes.LoadProductsFailure;
  constructor(public payload: string) {}
}


export type ProductActions = ToggleProductCode | LoadProducts | LoadProductsSuccess | LoadProductsFailure;
