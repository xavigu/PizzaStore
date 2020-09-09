import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer,
};

// selector of the object "products" inside of the whole store object
export const getProductsState = createFeatureSelector<ProductState>('products');

// selector of the object "pizzas" inside of the object "products"
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);

// selector to get data of each property of object "pizzas"
export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

// selector to convert each object of entities into an array
export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
});
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
