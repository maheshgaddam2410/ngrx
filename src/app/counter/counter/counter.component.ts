import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment1, reset } from '../../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter:any;
  constructor(private store:Store<{counter: {counter: number}}>) {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
  } )
}

  onIncrement() {
    this.store.dispatch(increment1());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
