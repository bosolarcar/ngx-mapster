import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewComponent } from './basic-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BasicViewComponent],
  exports: [
    BasicViewComponent
  ]
})
export class BasicViewModule { }
