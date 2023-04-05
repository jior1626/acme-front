import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

import { EMPTY, catchError, concatMap, exhaustMap, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { CarsService } from "src/app/services/Cars.service";
// import { selectCars } from "../reducers/car.reducer";
import * as carActions from "../actions/car.action";
 
@Injectable()
export class CarEffect {

    constructor(
        private actions$: Actions,
        private carsService: CarsService,
        private store: Store
    ) {}

    loadAllCars$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(carActions.loadCars),
            exhaustMap(action =>
              this.carsService.getCars().pipe(
                map(response => {
                  console.log("response:::", response)
                  return carActions.loadCarsSuccess({ response })
                }),
                catchError((error: any) => of(carActions.loadCarsFail(error))))
            )
        );
    });
}