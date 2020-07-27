import { Action } from '@ngrx/store';
import { ProductActionTypes, ProductActions } from './product.actions';
import { Product } from '../product';

export const productFeatureKey = 'product';

export interface State {
  showProductCode: boolean;
  products: Product[];
  errorMessage: string;
}

export const initialState: State = {
  showProductCode: false,
  products: [],
  errorMessage: null
};

export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: !state.showProductCode
      };
    case ProductActionTypes.LoadProductsSuccess:
      return {
        ...state,
        products: action.payload
      };
    case ProductActionTypes.LoadProductsFailure:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
