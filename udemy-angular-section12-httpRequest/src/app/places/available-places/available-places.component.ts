import { Component, signal, inject } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { OnInit } from '@angular/core';
import { DestroyRef } from '@angular/core';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  isFetching = signal(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces()
      .subscribe({
        next: (places: Place[]) => {
          console.log(places);
          this.places.set(places);
        },
        error: (error: Error) => {
          console.log(error);
          this.error.set('An error occurred fetching places!');
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });
      
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  onSelectPlace(selectedPlace: Place) {
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace.id)
      .subscribe({
        next: (resData: any) => {
          console.log(resData);
        },
        error: (error:Error) => {
          console.log(error);
        },
      });
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
  }
}
