import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CdkMenuModule} from '@angular/cdk-experimental/menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CdkMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
