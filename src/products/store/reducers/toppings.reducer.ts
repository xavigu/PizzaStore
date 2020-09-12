import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

export interface ToppingState {
  entities: { [id: number]: Topping };
  loading: boolean;
  loaded: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingState = {
  entities: {},
  loading: false,
  loaded: false,
  selectedToppings: [],
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction
): ToppingState {
  switch (action.type) {
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;

      return {
        ...state,
        selectedToppings,
      };
    }
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getToppingsEntities = (state: ToppingState) => state.entities;
export const getToppingsLoading = (state: ToppingState) => state.loading;
export const getToppingsLoaded = (state: ToppingState) => state.loaded;
export const getSelectedToppings = (state: ToppingState) =>
  state.selectedToppings;
