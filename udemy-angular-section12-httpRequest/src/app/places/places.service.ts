import { Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { catchError, map, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  httpClient = inject(HttpClient);
  isFetching = signal(false);
  error = signal('');

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places', 'An error occurred fetching places!')
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places', 'An error occurred fetching places!')
  }

  addPlaceToUserPlaces(placeId: string) {
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: placeId,
    });
  }

  removeUserPlace(place: Place) {}
  private fetchPlaces(url: string, errorMessage: string) {
    // Fetch places from the server
    this.httpClient
          .get<{ places: Place[] }>(url)
          .pipe(
            map(resData =>  resData.places),
            catchError((error) => {
              console.log(error);
              this.isFetching.set(false);
              this.error.set(errorMessage);
              return throwError(() => new Error(errorMessage));
            })
          )
  }
}
