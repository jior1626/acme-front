import { Action, createAction, props } from '@ngrx/store';
import { Car } from 'src/app/models/car';

/** LOAD CARS */
export const LOAD_CARS = '[Cars] Load cars';
export const LOAD_CARS_SUCCESS = '[Cars] Load cars success';
export const LOAD_CARS_FAIL = '[Cars] Load car fail';

/** UPDATE CAR */
export const UPDATE_CAR = '[Car] Update car';
export const UPDATE_CAR_SUCCESS = '[Car] Update car success';
export const UPDATE_CAR_FAIL = '[Car] Update car fail';

/** ADD CAR */
export const ADD_CAR = '[Car] Add car';
export const ADD_CAR_SUCCESS = '[Car] Add car success';
export const ADD_CAR_FAIL = '[Car] Add car fail';

/** DELETE CAR */
export const DELETE_CAR = '[Car] Delete car';
export const DELETE_CAR_SUCCESS = '[Car] Delete car success';
export const DELETE_CAR_FAIL = '[Car] Delete car fail';


export const loadCars = createAction(
    LOAD_CARS
);

export const loadCarsSuccess = createAction(
    LOAD_CARS_SUCCESS,
    props<{response: any}>()
);

export const loadCarsFail = createAction(
    LOAD_CARS_FAIL,
    props<{ error: any }>()
);
