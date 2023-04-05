import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromDriver from './../reducers/driver.reducer';

// Todo reducers Begin
export const geDriverState = createFeatureSelector<fromDriver.DriverState>('drivers');

export const getDriver = createSelector(
    geDriverState,
    fromDriver.driverReducer
);