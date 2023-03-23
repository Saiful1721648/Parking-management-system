import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit  {
  addVehicle:FormGroup | any;
  session:any;
  constructor() { }
  ngOnInit(): void {
    this.addVehicle=new FormGroup({
      'vehicleLicense': new FormControl(),
      'vehicleType': new FormControl(),
      'ownerName': new FormControl(),
      'ownerPhone': new FormControl(),
      'carParkingStatus': new FormControl(),
      'carEntry': new FormControl(),
      'carExit': new FormControl(),
      'carCharge': new FormControl(),
    })
  }
  addData(addVehicle:FormGroup){
   // console.log(this.addVehicleData.value)
    localStorage.setItem('addData',JSON.stringify(addVehicle.value))
  }

/*  loadData(){
    let data:any=localStorage.getItem('addData')
    this.session=JSON.parse(data)
  } */


}
