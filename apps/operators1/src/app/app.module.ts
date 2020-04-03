import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IifModule } from '../../../../libs/iif/src';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'scan',
        loadChildren: () => import('@operators/scan').then(m => m.ScanModule)
      }
    ], { initialNavigation: 'enabled' }),
    IifModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
