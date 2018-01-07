import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapsterComponent } from './ngx-mapster.component';
import * as ngxol from 'ngx-openlayers';
import { LeftSideBarComponent } from './menus/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './menus/right-side-bar/right-side-bar.component';
import { TrackMenuComponent } from './menus/track-menu/track-menu.component';
import { PoiMenuComponent } from './menus/poi-menu/poi-menu.component';
import { WeatherMenuComponent } from './menus/weather-menu/weather-menu.component';
import { SearchBarComponent } from './menus/search-bar/search-bar.component';
import { PoiLayerComponent } from './layers/poi-layer/poi-layer.component';
import { TrackLayerComponent } from './layers/track-layer/track-layer.component';
import { WeatherLayerComponent } from './layers/weather-layer/weather-layer.component';
import { GpsLayerComponent } from './layers/gps-layer/gps-layer.component';
import { TrackService } from '../../services/track.service';

@NgModule({
  imports: [
    CommonModule,
    ngxol.AngularOpenlayersModule
  ],
  declarations: [
    NgxMapsterComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    TrackMenuComponent,
    PoiMenuComponent,
    WeatherMenuComponent,
    SearchBarComponent,
    PoiLayerComponent,
    TrackLayerComponent,
    WeatherLayerComponent,
    GpsLayerComponent],
  exports: [
    NgxMapsterComponent
  ],
  providers: [
    TrackService
  ]
})
export class NgxMapsterModule { }
