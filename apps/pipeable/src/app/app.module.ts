import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'scan',
        loadChildren: () => import('@operators/pipeable/scan').then(m => m.ScanModule)
      },
      {
        path: 'tap',
        loadChildren: () => import('@operators/pipeable/tap').then(m => m.TapModule)
      }
    ], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
