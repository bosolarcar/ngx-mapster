import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  @Output()
  menuSelected: EventEmitter<string> = new EventEmitter();

  selectedMenu: string;

  constructor() { }

  ngOnInit() {
  }

  showMenu(newSelectedMenu: string) {
    if (newSelectedMenu === this.selectedMenu) {
      this.selectedMenu = '';
      this.menuSelected.emit('');
    } else {
      this.menuSelected.emit(newSelectedMenu);
      this.selectedMenu = newSelectedMenu;
    }
  }

}
