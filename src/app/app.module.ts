import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherItemComponent } from './weather/weather-list/weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    WeatherComponent,
    HeaderComponent,
    WeatherListComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
