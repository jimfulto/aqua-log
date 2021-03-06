import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../weather.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input()
  weather!: Weather;
  @Input()
  index!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
