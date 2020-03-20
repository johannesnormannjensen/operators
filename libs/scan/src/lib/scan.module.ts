import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SumOverTimeComponent } from './sum-over-time/sum-over-time.component';
import { AccumulateObjectComponent } from './accumulate-object/accumulate-object.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sum-over-time'
      },
      {
        path: 'sum-over-time',
        component: SumOverTimeComponent
      },
      {
        path: 'accumulate-object',
        component: AccumulateObjectComponent
      }
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [SumOverTimeComponent, AccumulateObjectComponent]
})
export class ScanModule {}
