import { tap, map } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';

const code = `
export class WhenComponent implements OnInit {

  a$: Observable<number>
  b$: Observable<number>
  odd$: Observable<boolean>
  odd = false;

  constructor() { }

  ngOnInit(): void {

    this.a$ = interval(1000).pipe(
      tap(index => this.odd = index % 2 === 1)
    )

    this.b$ = interval(1000);
    this.odd$ = this.b$.pipe(
        map(index => index % 2 === 1)
    );

  }

}
`

@Component({
  selector: 'operators-when',
  templateUrl: './when.component.html'
})
export class WhenComponent implements OnInit {

  a$: Observable<number>
  b$: Observable<number>
  odd$: Observable<boolean>
  odd = false;
  code = code;

  constructor() { }

  ngOnInit(): void {

    this.a$ = interval(1000).pipe(
      tap(index => this.odd = index % 2 === 1)
    )

    this.b$ = interval(1000);
    this.odd$ = this.b$.pipe(
        map(index => index % 2 === 1)
    );

  }

}
