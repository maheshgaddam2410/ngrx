import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { decrement, increment1, reset } from '../state/actions/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store:Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {}

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
