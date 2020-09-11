import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as toppingAction from '../actions/toppings.action';
import * as fromServices from '../../services';

// Injectable decorator to inject things by the constructos
@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingService: fromServices.ToppingsService
  ) {}

  // use decorator @Effect to know that is an effect
  @Effect()
  loadToppings$ = this.actions$.ofType(toppingAction.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingService.getToppings().pipe(
        map((toppings) => new toppingAction.LoadToppingsSucess(toppings)),
        catchError((error) => of(new toppingAction.LoadToppingsFail(error)))
      );
    })
  );
}
