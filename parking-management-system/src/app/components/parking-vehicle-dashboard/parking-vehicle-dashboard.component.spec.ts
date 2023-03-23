import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingVehicleDashboardComponent } from './parking-vehicle-dashboard.component';

describe('ParkingVehicleDashboardComponent', () => {
  let component: ParkingVehicleDashboardComponent;
  let fixture: ComponentFixture<ParkingVehicleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingVehicleDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingVehicleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
