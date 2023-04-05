import { Action } from '@ngrx/store';
import { Owner } from 'src/app/models/owner';

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

export class LoadOwners implements Action {
    readonly type = LOAD_OWNERS;
}

export class LoadOwnerSucess implements Action {
    readonly type = LOAD_OWNERS_SUCCESS;

    constructor(public payLoad: Owner[]) {
    }
}

export class LoadOwnerFail implements Action {
    readonly type = LOAD_OWNERS_FAIL;

    constructor(public payLoad: any) {
    }
}

export class UpdateOwner implements Action {
    readonly type = UPDATE_OWNER;

    constructor(public payLoad: any) {}
}

export class UpdateOwnerSuccess implements Action {
    readonly type = UPDATE_OWNER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class UpdateOwnerFail implements Action {
    readonly type = UPDATE_OWNER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class AddOwner implements Action {
    readonly type = ADD_OWNER;

    constructor(public payLoad: any) {}
}

export class AddOwnerSuccess implements Action {
    readonly type = ADD_OWNER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class AddOwnerFail implements Action {
    readonly type = ADD_OWNER_FAIL;

    constructor(public payLoad: any) {}
}

export class DeleteOwner implements Action {
    readonly type = DELETE_OWNER;

    constructor(public payLoad: any) {}
}

export class DeleteOwnerSuccess implements Action {
    readonly type = DELETE_OWNER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class DeleteustomerFail implements Action {
    readonly type = DELETE_OWNER_FAIL;

    constructor(public payLoad: any) {}
}

export type OwnerActions = LoadOwners | LoadOwnerSucess | LoadOwnerFail |
    UpdateOwner | UpdateOwnerSuccess | UpdateOwnerFail |
    AddOwner | AddOwnerSuccess | AddOwnerFail |
    DeleteOwner | DeleteOwnerSuccess | DeleteustomerFail;