import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Car } from "src/app/models/car";

import * as carAction from '../actions/car.action';


export interface CarState {
    data: Car[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: CarState = {
    data: [],
    loaded: false,
    loading: false,
    error: ""
}

export const carReducer = createReducer(
    initialState,
    on(carAction.loadCars, (state) => {
        state.loaded = false;
        state.loading = true;
        return state;
    }),
    on(carAction.loadCarsSuccess, (state, {response}) => {
      state.data = response;
      state.loaded = true;
      state.loading = false;
      return state;
    }),
    on(carAction.loadCarsFail, (state, {error}) => {
        state.loaded = true;
        state.loading = false;
        state.error = error;
        return state;
    })
);
