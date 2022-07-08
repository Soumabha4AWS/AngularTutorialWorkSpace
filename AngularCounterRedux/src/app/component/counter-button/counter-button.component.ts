import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment,decrement,reset } from '../state/counter.action';


@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {




  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void { }


  increase() {
    this.store.dispatch(increment());
  }

  decrease() {
    this.store.dispatch(decrement());
  }

  revert() {
    this.store.dispatch(reset());
  }

}
