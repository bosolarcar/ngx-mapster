import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxMapsterModule } from './modules/ngx-mapster/ngx-mapster.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMapsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
