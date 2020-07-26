import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './product.reducer';

export const getProductFeatureState = createFeatureSelector<fromProduct.State>(fromProduct.productFeatureKey);

export const getShowProductCode = createSelector(getProductFeatureState, (state: fromProduct.State) => state.showProductCode);
