import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWidgetComponent } from './city-widget.component';

describe('CityWidgetComponent', () => {
  let component: CityWidgetComponent;
  let fixture: ComponentFixture<CityWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
