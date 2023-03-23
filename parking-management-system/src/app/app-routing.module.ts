import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { ParkingVehicleDetailsComponent } from './components/parking-vehicle-details/parking-vehicle-details.component';
import { ParkingVehicleDashboardComponent } from './components/parking-vehicle-dashboard/parking-vehicle-dashboard.component';

const routes: Routes = [
  {redirectTo:'AddVehicleComponent',path:'',pathMatch:'full'},
  {path:'AddVehicleComponent', component:AddVehicleComponent},
  {path:'parkingDetails', component:ParkingVehicleDetailsComponent},
  {path:'dashboard', component:ParkingVehicleDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
