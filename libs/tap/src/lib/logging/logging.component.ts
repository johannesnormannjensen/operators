import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operators-logging',
  templateUrl: './logging.component.html'
})
export class LoggingComponent implements OnInit {

  code = `
  `


  subject = new Subject<string>();
  a$: Observable<string>;
  b$: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.a$ = this.subject.pipe(
      tap(_ => console.log(_))
    );
    this.b$ = this.subject.pipe(
      tap(console.log)
    );
  }

  add(value: string) {
    this.subject.next(value);
  }

}
