import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BasicViewModule } from './modules/basic-view/basic-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
