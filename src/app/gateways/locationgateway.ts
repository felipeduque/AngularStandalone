import { Injectable } from '@angular/core';
import { Location } from '../domain/location';

@Injectable({
  providedIn: 'root'
})
export class LocationGateway {
  private locations: Location[] = [
    {
      id: 1,
      title: 'Singapur',
      imageUrl: 'https://tws.tourknife.com/uploads/media/misc/2a8297659af16e28475fb45ce774d655.webp',
      description: 'Ciudad-estado moderna y vibrante del sudeste asiático',
      position: { lat: 1.290270, lng: 103.851959 }
    },
    {
      id: 2,
      title: 'Bali',
      imageUrl: 'https://tws.tourknife.com/uploads/media/misc/3df751e2d237fd5cb0484eb48021c9e7.webp',
      description: 'Isla paradisíaca de Indonesia con rica cultura y playas',
      position: { lat: -8.409518, lng: 115.188919 }
    }
  ];

  getLocations(): Location[] {
    return this.locations;
  }
}