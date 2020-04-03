import { Component, OnInit } from '@angular/core';
import { iif, interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const code = `

  subscribeToFirst = true;

  firstObservable$ = interval(1000).pipe(
    tap(number => this.firstRes = number)
  );
  secondObservable$ = interval(500).pipe(
    tap( number => this.secondRes = number)
  );

  firstOrSecond$ = iif(
    () => this.subscribeToFirst,
    this.firstObservable$,
    this.secondObservable$
  );

  firstRes: number;
  secondRes: number;
  code = code;

  constructor() { }

  ngOnInit(): void {
  }

  switch() {
    this.subscribeToFirst = !this.subscribeToFirst
  }

  subscribe() {
    this.firstOrSecond$.subscribe()
  }

`;

@Component({
  selector: 'operators-first-or-second',
  templateUrl: './first-or-second.component.html',
  styleUrls: ['./first-or-second.component.css']
})
export class FirstOrSecondComponent implements OnInit {

  subscribeToFirst = true;

  firstObservable$ = interval(1000).pipe(
    tap(number => this.firstRes = number)
  );
  secondObservable$ = interval(500).pipe(
    tap( number => this.secondRes = number)
  );

  firstOrSecond$ = iif(
    () => this.subscribeToFirst,
    this.firstObservable$,
    this.secondObservable$
  );

  firstRes: number;
  secondRes: number;
  code = code;

  constructor() { }

  ngOnInit(): void {
  }

  switch() {
    this.subscribeToFirst = !this.subscribeToFirst
  }

  subscribe() {
    this.firstOrSecond$.subscribe()
  }

}
