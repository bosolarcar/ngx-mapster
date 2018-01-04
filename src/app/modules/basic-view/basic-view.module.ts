import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view.component';
import * as ngxol from 'ngx-openlayers';

@NgModule({
  imports: [
    CommonModule,
    ngxol.AngularOpenlayersModule
  ],
  declarations: [BasicViewComponent],
  exports: [
    BasicViewComponent
  ]
})
export class BasicViewModule { }
