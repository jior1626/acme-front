import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCar from './../reducers/car.reducer';

// Todo reducers Begin
export const geCarState = createFeatureSelector<fromCar.CarState>('cars');

export const getAccount = createSelector(
    geCarState,
    fromCar.carReducer
);