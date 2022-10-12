import { createReducer, on} from '@ngrx/store'
import { addUser } from '../actions/user.actions';
import { User } from '../modal/user.state';


export const userFeatureKey = 'user';

export interface UserState {
      users: User[];
    }
export const initialState: UserState = {
    users: []
    };
    

const _userReducer = createReducer(initialState, 
    on(addUser, (state:  UserState, {user}) => 
        ({...state,
            users: [...state.users, user]
        }
        ))
    );

export function userReducer(state: UserState, action:any) {
    return _userReducer(state, action);
}