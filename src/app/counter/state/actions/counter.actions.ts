import { createAction } from "@ngrx/store";

export const increment1 = createAction('add');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
