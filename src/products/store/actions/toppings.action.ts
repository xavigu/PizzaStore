import { Action } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

// load Toppings
export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  // Message to the server if there is an error
  constructor(public payload: any) {}
}

export class LoadToppingsSucess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

// action types
export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSucess;
