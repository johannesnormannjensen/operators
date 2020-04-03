import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstOrSecondComponent } from './first-or-second/first-or-second.component';



@NgModule({
  declarations: [FirstOrSecondComponent],
  exports: [
    FirstOrSecondComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IifModule { }
