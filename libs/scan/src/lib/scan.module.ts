import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SumOverTimeComponent } from './sum-over-time/sum-over-time.component';

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
        pathMatch: 'full',
        component: SumOverTimeComponent
      }
    ]),
    CommonModule,
  ],
  declarations: [SumOverTimeComponent]
})
export class ScanModule {}
