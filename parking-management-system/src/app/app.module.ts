import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParkingVehicleDetailsComponent } from './components/parking-vehicle-details/parking-vehicle-details.component';
import { ParkingVehicleDashboardComponent } from './components/parking-vehicle-dashboard/parking-vehicle-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddVehicleComponent,
    ParkingVehicleDetailsComponent,
    ParkingVehicleDashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
