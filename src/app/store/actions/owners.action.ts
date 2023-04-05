import { createAction, props } from '@ngrx/store';
import { Owner } from 'src/app/models/owner';

/** LOAD OWNERS */
export const LOAD_OWNERS = '[Owners] Load owners';
export const LOAD_OWNERS_SUCCESS = '[Owners] Load owners success';
export const LOAD_OWNERS_FAIL = '[Owners] Load owner fail';

/** UPDATE OWNER */
export const UPDATE_OWNER = '[Owner] Update owner';
export const UPDATE_OWNER_SUCCESS = '[Owner] Update owner success';
export const UPDATE_OWNER_FAIL = '[Owner] Update owner fail';

/** ADD OWNER */
export const ADD_OWNER = '[Owner] Add owner';
export const ADD_OWNER_SUCCESS = '[Owner] Add owner success';
export const ADD_OWNER_FAIL = '[Owner] Add owner fail';

/** DELETE OWNER */
export const DELETE_OWNER = '[Owner] Delete owner';
export const DELETE_OWNER_SUCCESS = '[Owner] Delete owner success';
export const DELETE_OWNER_FAIL = '[Owner] Delete owner fail';


export const loadOwners = createAction(
    LOAD_OWNERS
);

export const loadOwnersSuccess = createAction(
    LOAD_OWNERS_SUCCESS,
    props<{response: any}>()
);

export const loadOwnersFail = createAction(
    LOAD_OWNERS_FAIL,
    props<{ error: any }>()
);
