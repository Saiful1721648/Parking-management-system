import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingVehicleDetailsComponent } from './parking-vehicle-details.component';

describe('ParkingVehicleDetailsComponent', () => {
  let component: ParkingVehicleDetailsComponent;
  let fixture: ComponentFixture<ParkingVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingVehicleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
