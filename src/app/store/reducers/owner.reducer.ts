import { createReducer, on } from "@ngrx/store";
import { Owner } from "src/app/models/owner";

import * as ownerAction from '../actions/owners.action';

export interface OwnerState {
    data: Owner[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: OwnerState = {
    data: [],
    loaded: false,
    loading: false,
    error: ""
}

export const ownerReducer = createReducer(
    initialState,
    on(ownerAction.loadOwners, (state) => {
        state.loaded = false;
        state.loading = true;
        return state;
    }),
    on(ownerAction.loadOwnersSuccess, (state, {response}) => {
      state.data = response;
      state.loaded = true;
      state.loading = false;
      return state;
    }),
    on(ownerAction.loadOwnersFail, (state, {error}) => {
        state.loaded = true;
        state.loading = false;
        state.error = error;
        return state;
    })
);