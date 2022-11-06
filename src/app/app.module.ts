import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CofeeListComponent } from './components/cofee-list/cofee-list.component';
import { CofeeModule } from './components/cofee/cofee.module';


@NgModule({
  declarations: [
    AppComponent,
    CofeeListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CofeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
