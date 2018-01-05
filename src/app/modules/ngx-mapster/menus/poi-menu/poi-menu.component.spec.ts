import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiMenuComponent } from './poi-menu.component';

describe('PoiMenuComponent', () => {
  let component: PoiMenuComponent;
  let fixture: ComponentFixture<PoiMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
