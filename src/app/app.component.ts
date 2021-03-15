import { Component } from '@angular/core';
import {Coordinates } from './Coordinates';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hell Google maps';
  lat = 48.210033;
  lng = 16.363449;

  coords : Coordinates[] = [ {lat: 48.16599, lng: 16.532363} , {lat: 48.2282415, lng: 16.300277613}];

  mapOnClick(event){
   console.log(event);
  }
}
