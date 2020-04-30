import { Component, OnInit } from '@angular/core';
import { iif, interval } from 'rxjs';
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
  selector: 'app-operators-iif',
  templateUrl: './iif.component.html',
  styleUrls: ['./iif.component.css']
})
export class IifComponent implements OnInit {

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
