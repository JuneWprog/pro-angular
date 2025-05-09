import { Component, DestroyRef } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { signal } from '@angular/core';
import { OnInit } from '@angular/core';
import { Place } from '../place.model';

import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  isFetching = signal(false);
  error = signal('')

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces()
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
}  