import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMapsterComponent } from './ngx-mapster.component';

describe('NgxMapsterComponent', () => {
  let component: NgxMapsterComponent;
  let fixture: ComponentFixture<NgxMapsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMapsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMapsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
