import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

const code = `
  example$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

  start()  {
    this.example$ = interval(1000).pipe(scan((acc, curr) => acc + curr, 0))
  }
`;

@Component({
  selector: 'operators-sum-over-time',
  templateUrl: './sum-over-time.component.html',
  styleUrls: ['./sum-over-time.component.css']
})
export class SumOverTimeComponent implements OnInit {

  code = code;

  example$: Observable<number>;

  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    this.example$ = interval(1000).pipe(scan((acc, curr) => acc + curr, 0));
  }

}
