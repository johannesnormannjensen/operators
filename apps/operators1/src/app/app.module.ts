import { TapModule } from './../../../../libs/tap/src/lib/tap.module';
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
      },
      {
        path: 'tap',
        loadChildren: () => import('@operators/tap').then(m => m.TapModule)
      }
    ], { initialNavigation: 'enabled' }),
    IifModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
