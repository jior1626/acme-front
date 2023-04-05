import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Driver } from "src/app/models/driver";

import * as driverAction from '../actions/drivers.action';

export interface DriverState {
    data: Driver[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: DriverState = {
    data: [],
    loaded: false,
    loading: false,
    error: ""
}

export const driverReducer = createReducer(
    initialState,
    on(driverAction.loadDrivers, (state) => {
        state.loaded = false;
        state.loading = true;
        return state;
    }),
    on(driverAction.loadDriversSuccess, (state, {response}) => {
      state.data = response;
      state.loaded = true;
      state.loading = false;
      return state;
    }),
    on(driverAction.loadDriversFail, (state, {error}) => {
        state.loaded = true;
        state.loading = false;
        state.error = error;
        return state;
    })
);
