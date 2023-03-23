import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-vehicle-details',
  templateUrl: './parking-vehicle-details.component.html',
  styleUrls: ['./parking-vehicle-details.component.scss']
})
export class ParkingVehicleDetailsComponent implements OnInit {
  getVehicleDetails:any;
  constructor() { }
  ngOnInit(): void {
    this.vehicleDetails();
  }

  vehicleDetails(){
    if(localStorage.getItem('addData'))
    {
     this.getVehicleDetails= JSON.parse(localStorage.getItem('addData')!);
      console.log(this.getVehicleDetails);
    }
  }

}
