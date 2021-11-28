import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { AuthComponent } from './auth/auth.component';
import { WeatherDetailComponent } from './weather/weather-detail/weather-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent, children: [
    // { path: '', component: WeatherComponent},
    { path: ':id', component: WeatherDetailComponent }
  ] },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
