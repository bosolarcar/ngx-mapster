import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLayerComponent } from './weather-layer.component';

describe('WeatherLayerComponent', () => {
  let component: WeatherLayerComponent;
  let fixture: ComponentFixture<WeatherLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
