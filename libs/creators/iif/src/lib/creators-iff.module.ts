import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IifComponent } from './iif/iif.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'iif'
      },
      {
        path: 'iif',
        component: IifComponent
      },
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [IifComponent],
})
export class CreatorsIffModule {}
