import { ActionReducerMap } from '@ngrx/store';

import * as fromCar from './reducers/car.reducer';
import * as fromOwner from './reducers/owner.reducer';
import * as fromDriver from './reducers/driver.reducer';

export interface State {
    user: fromCar.CarState;
    car: fromOwner.OwnerState;
    category: fromDriver.DriverState
}

export const reducers: ActionReducerMap<State> = {
    user: fromCar.carReducer,
    car: fromOwner.ownerReducer,
    category: fromDriver.driverReducer
};