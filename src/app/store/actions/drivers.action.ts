import { createAction, props } from '@ngrx/store';

/** LOAD DRIVERS */
export const LOAD_DRIVERS = '[Drivers] Load drivers';
export const LOAD_DRIVERS_SUCCESS = '[Drivers] Load drivers success';
export const LOAD_DRIVERS_FAIL = '[Drivers] Load driver fail';

/** UPDATE CAR */
export const UPDATE_CAR = '[Driver] Update driver';
export const UPDATE_CAR_SUCCESS = '[Driver] Update driver success';
export const UPDATE_CAR_FAIL = '[Driver] Update driver fail';

/** ADD CAR */
export const ADD_CAR = '[Driver] Add driver';
export const ADD_CAR_SUCCESS = '[Driver] Add driver success';
export const ADD_CAR_FAIL = '[Driver] Add driver fail';

/** DELETE CAR */
export const DELETE_CAR = '[Driver] Delete driver';
export const DELETE_CAR_SUCCESS = '[Driver] Delete driver success';
export const DELETE_CAR_FAIL = '[Driver] Delete driver fail';


export const loadDrivers = createAction(
    LOAD_DRIVERS
);

export const loadDriversSuccess = createAction(
    LOAD_DRIVERS_SUCCESS,
    props<{response: any}>()
);

export const loadDriversFail = createAction(
    LOAD_DRIVERS_FAIL,
    props<{ error: any }>()
);
