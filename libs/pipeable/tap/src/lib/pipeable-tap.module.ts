import { LoggingComponent } from './logging/logging.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhenComponent } from './when/when.component';

@NgModule({
  declarations: [LoggingComponent, WhenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'logging'
      },
      {
        path: 'logging',
        component: LoggingComponent
      },
      {
        path: 'when',
        component: WhenComponent
      }
    ])
  ],
})
export class PipeableTapModule {}
