import { ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '../reducers'
import * as fromCounter from '../reducers/counter.reducer'
import * as fromUser from '../reducers/user.reducer'

interface AppState {
  }

export const reducers: ActionReducerMap<AppState> = {    
    counterState: fromCounter.counterReducer,
    userState: fromUser.userReducer
};

