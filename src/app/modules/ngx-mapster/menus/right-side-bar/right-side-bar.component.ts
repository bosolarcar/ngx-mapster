import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { control } from 'openlayers';

@Component({
  selector: 'right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent implements OnInit {

  @Output()
  viewAction: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireViewAction(action: string): void {
    this.viewAction.emit(action);
  }
}
