import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';


interface Document {
  exitFullscreen: any;
  mozCancelFullScreen: any;
  webkitExitFullscreen: any;
  fullscreenElement: any;
  mozFullScreenElement: any;
  webkitFullscreenElement: any;
}
@Component({
  selector: 'ngx-mapster',
  templateUrl: './ngx-mapster.component.html',
  styleUrls: ['./ngx-mapster.component.css']
})

export class NgxMapsterComponent implements OnInit, AfterViewInit {

  selectedMenu: string;
  fullscreenContainer: any;
  mapContainer: any;
  zoom = 14;
  center = {
    x: 7.274032,
    y: 51.447171
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.fullscreenContainer = document.getElementById('fullscreencontainer');
    this.mapContainer = document.getElementById('ol-viewport');
  }

  handleViewAction(action: string) {
    switch (action) {
      case 'zoom-in':
        this.increaseZoom();
        break;
      case 'zoom-out':
        this.decreaseZoom();
        break;
      case 'fullscreen':
        this.toggleFullscreen();
        break;
      case 'center-map':
        this.center = {
          x: 7.274032,
          y: 51.447171
        };
        break;
      default:
        console.log('No known action on View');
        break;
    }
  }

  increaseZoom() {
    this.zoom = Math.min(this.zoom + 1, 18);
  }

  decreaseZoom() {
    this.zoom = Math.max(this.zoom - 1, 1);
  }

  centerMap() {
    console.log(this.mapContainer);
  }

  toggleFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else {
      if (this.fullscreenContainer.requestFullscreen) {
        this.fullscreenContainer.requestFullscreen();
      } else if (this.fullscreenContainer.webkitRequestFullscreen) {
        this.fullscreenContainer.webkitRequestFullscreen();
      }
    }
  }
}
