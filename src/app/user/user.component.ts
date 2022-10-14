import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../store/modal/user.state';
import { addUser} from '../store/actions/user.actions';
import { UserState } from '../store/reducers/user.reducer';
import { selectUsers } from '../store/selector/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: any;
  constructor(private store: Store<UserState>) { 
  this.users = this.store.pipe(select(selectUsers));
 }
  

  addUser(userName: string): void {
    const user = new User();
    user.name = userName;
    this.store.dispatch(addUser(user));
  }

  
}
