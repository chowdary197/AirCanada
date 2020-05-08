import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsdetailsComponent } from './flightsdetails.component';

describe('FlightsdetailsComponent', () => {
  let component: FlightsdetailsComponent;
  let fixture: ComponentFixture<FlightsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
