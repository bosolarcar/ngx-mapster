import { Injectable } from '@angular/core';
import { TrackInformation } from '../definitions/track';
import { TRACKINFORMATIONS } from '../mocks/trackInformationMock';

@Injectable()
export class TrackService {

  constructor() { }

  getAllTrackInformations(): TrackInformation[] {
    return TRACKINFORMATIONS;
  }

}
