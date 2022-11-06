import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CofeeComponent } from './components/cofee/cofee.component';
import { CofeeListComponent } from './components/cofee-list/cofee-list.component';
import { CofeeModule } from './components/cofee/cofee.module';

@NgModule({
  declarations: [
    AppComponent,
    CofeeListComponent
  ],
  imports: [
    BrowserModule,
    CofeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
