import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromOwner from './../reducers/owner.reducer';

// Todo reducers Begin
export const geOwnerState = createFeatureSelector<fromOwner.OwnerState>('owners');

export const getOwner = createSelector(
    geOwnerState,
    fromOwner.ownerReducer
);