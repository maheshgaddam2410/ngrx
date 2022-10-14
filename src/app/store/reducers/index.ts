import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from '../reducers/counter.reducer'
import * as fromUser from '../reducers/user.reducer'


interface AppState {
  counterState: fromCounter.CounterState;
  userState: fromUser.UserState;
  }

export const reducers: ActionReducerMap<AppState> = {    
    counterState: fromCounter.counterReducer,
    userState: fromUser.userReducer
};

