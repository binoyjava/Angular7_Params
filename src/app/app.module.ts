import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { DealerDetailComponent } from './dealer-detail/dealer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DealerListComponent,
    DealerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
