import { Action } from '@ngrx/store';
import { ProductActionTypes, ProductActions } from './product.actions';

export const productFeatureKey = 'product';

export interface State {
  showProductCode: boolean;
}

export const initialState: State = {
  showProductCode: false
};

export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: !state.showProductCode
      };
    default:
      return state;
  }
}
