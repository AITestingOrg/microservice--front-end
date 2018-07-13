import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesAutocompleteComponent } from './components/presentation/places-autocomplete/places-autocomplete.component';
import { TripCreatedComponent } from './components/smart/trip-created/trip-created/trip-created.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TripCreatedComponent]
})
export class PassengersModule { }
