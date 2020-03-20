import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'operators-accumulate-object',
  templateUrl: './accumulate-object.component.html',
  styleUrls: ['./accumulate-object.component.css']
})
export class AccumulateObjectComponent implements OnInit {

  key = 'name';
  value = 'Brandon';

  objSource$ = new Subject<any>();

  example$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.example$ = this.objSource$.pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
  }

  addObject() {
    console.log({[this.key]: this.value});
    this.objSource$.next( {[this.key]: this.value});
  }

}
