import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../../services/track.service';
import { TrackInformation } from '../../../../definitions/track';

@Component({
  selector: 'track-menu',
  templateUrl: './track-menu.component.html',
  styleUrls: ['./track-menu.component.css']
})
export class TrackMenuComponent implements OnInit {

  trackInformations: TrackInformation[];

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.getAllTrackInformations();
  }

  getAllTrackInformations(): void {
    this.trackInformations = this.trackService.getAllTrackInformations();
  }

}
