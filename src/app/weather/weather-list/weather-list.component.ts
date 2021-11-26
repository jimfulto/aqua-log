import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  weathers: Weather[] = [
    new Weather( 5, 3),
    new Weather( 8, 15)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
