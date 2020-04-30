import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PureUiModule } from '@operators/pure-ui';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    PureUiModule,
    RouterModule.forRoot([
      {
        path: 'iif',
        loadChildren: () => import('@operators/creators/iif').then(m => m.CreatorsIffModule)
      },
      {
        path: 'interval',
        loadChildren: () => import('@operators/creators/interval').then(m => m.CreatorsIntervalModule)
      }
    ], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
