import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IntervalComponent } from './interval/interval.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'interval'
      },
      {
        path: 'interval',
        component: IntervalComponent
      },
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [IntervalComponent],
})
export class CreatorsIntervalModule {}
