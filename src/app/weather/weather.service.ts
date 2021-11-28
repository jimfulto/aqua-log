import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weathersChanged = new Subject<Weather[]>();

  private weathers: Weather[] = [
    new Weather( 5, 3),
    new Weather( 8, 15)
  ];

  constructor() { }

  getWeathers() {
    //get copy of hashiras
    return this.weathers.slice();
 }

  getWeather(index: number) {
    return this.weathers[index];
  }
}
