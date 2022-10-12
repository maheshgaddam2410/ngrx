import { createAction } from "@ngrx/store";
import { User } from "../modal/user.state";


export const addUser = createAction('Add User',
(user: User) => ({user}));

