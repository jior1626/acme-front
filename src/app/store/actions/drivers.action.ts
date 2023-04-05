import { Action } from '@ngrx/store';
import { Driver } from 'src/app/models/driver';

export const LOAD_DRIVERS = '[Drivers] Load drivers';
export const LOAD_DRIVERS_SUCCESS = '[Drivers] Load drivers success';
export const LOAD_DRIVERS_FAIL = '[Drivers] Load driver fail';

/** UPDATE DRIVER */
export const UPDATE_DRIVER = '[Driver] Update driver';
export const UPDATE_DRIVER_SUCCESS = '[Driver] Update driver success';
export const UPDATE_DRIVER_FAIL = '[Driver] Update driver fail';

/** ADD DRIVER */
export const ADD_DRIVER = '[Driver] Add driver';
export const ADD_DRIVER_SUCCESS = '[Driver] Add driver success';
export const ADD_DRIVER_FAIL = '[Driver] Add driver fail';

/** DELETE DRIVER */
export const DELETE_DRIVER = '[Driver] Delete driver';
export const DELETE_DRIVER_SUCCESS = '[Driver] Delete driver success';
export const DELETE_DRIVER_FAIL = '[Driver] Delete driver fail';

export class LoadDrivers implements Action {
    readonly type = LOAD_DRIVERS;
}

export class LoadDriverSucess implements Action {
    readonly type = LOAD_DRIVERS_SUCCESS;

    constructor(public payLoad: Driver[]) {
    }
}

export class LoadDriverFail implements Action {
    readonly type = LOAD_DRIVERS_FAIL;

    constructor(public payLoad: any) {
    }
}

export class UpdateDriver implements Action {
    readonly type = UPDATE_DRIVER;

    constructor(public payLoad: any) {}
}

export class UpdateDriverSuccess implements Action {
    readonly type = UPDATE_DRIVER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class UpdateDriverFail implements Action {
    readonly type = UPDATE_DRIVER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class AddDriver implements Action {
    readonly type = ADD_DRIVER;

    constructor(public payLoad: any) {}
}

export class AddDriverSuccess implements Action {
    readonly type = ADD_DRIVER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class AddDriverFail implements Action {
    readonly type = ADD_DRIVER_FAIL;

    constructor(public payLoad: any) {}
}

export class DeleteDriver implements Action {
    readonly type = DELETE_DRIVER;

    constructor(public payLoad: any) {}
}

export class DeleteDriverSuccess implements Action {
    readonly type = DELETE_DRIVER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class DeleteustomerFail implements Action {
    readonly type = DELETE_DRIVER_FAIL;

    constructor(public payLoad: any) {}
}

export type DriverActions = LoadDrivers | LoadDriverSucess | LoadDriverFail |
    UpdateDriver | UpdateDriverSuccess | UpdateDriverFail |
    AddDriver | AddDriverSuccess | AddDriverFail |
    DeleteDriver | DeleteDriverSuccess | DeleteustomerFail;