import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsLayerComponent } from './gps-layer.component';

describe('GpsLayerComponent', () => {
  let component: GpsLayerComponent;
  let fixture: ComponentFixture<GpsLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
