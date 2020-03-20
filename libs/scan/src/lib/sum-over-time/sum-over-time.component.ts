import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { delay, scan, switchMap } from 'rxjs/operators';

@Component({
  selector: 'operators-sum-over-time',
  templateUrl: './sum-over-time.component.html',
  styleUrls: ['./sum-over-time.component.css']
})
export class SumOverTimeComponent implements OnInit {

  example$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

  start()  {
    this.example$ = interval(1000).pipe(scan((acc, curr) => acc + curr, 0))
  }


// basic scan example, sum over time starting with zero
// log accumulated values
// output: 1,3,6

}
