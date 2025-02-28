import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule, MapMarker } from '@angular/google-maps';
import { LocationGateway } from '../../gateways/locationgateway';
import { Location } from '../../domain/location';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-map',
  imports: [CommonModule, GoogleMapsModule, CardModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 1.290270, lng: 103.851959 };
  zoom = 4.5;
  locations: Location[] = [];

  constructor(private locationGateway: LocationGateway) {}

  ngOnInit() {
    this.locations = this.locationGateway.getLocations();
  }
}
