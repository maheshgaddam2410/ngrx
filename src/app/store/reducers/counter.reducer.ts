import { createReducer, on} from '@ngrx/store'
import { decrement, increment1, reset } from '../actions/counter.actions';


export interface CounterState {
    counter: number
};

export const initialState: CounterState = {
    counter: 0
};

const _counterReducer = createReducer(initialState, 
    on(increment1, (state) =>  {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    })
    );

export function counterReducer(state:any, action:any) {
    return _counterReducer(state, action);
}