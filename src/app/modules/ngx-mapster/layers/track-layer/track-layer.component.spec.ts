import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLayerComponent } from './track-layer.component';

describe('TrackLayerComponent', () => {
  let component: TrackLayerComponent;
  let fixture: ComponentFixture<TrackLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
