import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  weathers!: Weather[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.weathersChanged
      .subscribe(
          (weathers: Weather[]) => {
            this.weathers = weathers;
          }
      );
      this.weathers = this.weatherService.getWeathers();
  }

}
