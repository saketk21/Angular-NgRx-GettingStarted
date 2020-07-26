import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const getUserFeatureState = createFeatureSelector<fromUser.UserState>(fromUser.userFeatureKey);

export const getMaskUserName = createSelector(getUserFeatureState, state => state.maskUserName);
