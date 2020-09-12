import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';
import { Topping } from 'src/products/models/topping.model';

// get toppings state from the root level of the state
export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

// get entities from the toppings state
export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingsEntities
);

// get selected toppings from the toppings state
export const getSelectedToppings = createSelector(
  getToppingsState,
  fromToppings.getSelectedToppings
);

export const getAllToppings = createSelector(
  getToppingsEntities,
  (entities) => {
    return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
  }
);
export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);
export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);
