import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyWeatherService } from './services/my-weather.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TodayComponent } from './components/today/today.component';
import { Today } from './model/today';
import { Forecast } from './model/forecast';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ForecastComponent } from './components/forecast/forecast.component';
import { LocationService } from './services/location.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, MatGridListModule, TodayComponent, MatProgressSpinnerModule, ForecastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mw = inject(MyWeatherService);
  public gps = inject(LocationService);

  public todayForecast!: Today;
  public futureForecast: Forecast = {
    days:[]
  };
  

  constructor(){}

  ngOnInit(){

    this.gps.getLocation();

    this.mw.getForeCast(1000, 1000).subscribe((data) => {
      this.todayForecast = {
        location: data.location.name,
        maxtemp: data.forecast[0].day.maxtemp_c,
        mintemp: data.forecast[0].day.mintemp_c,
        condition: data.forecast[0].day.condition
      };

        for(let d of data.forecast){
          this.futureForecast.days.push(
            {
              date:d.date,
              weather: {
                location: data.location.name,
                maxtemp: d.day.maxtemp_c,
                mintemp: d.day.mintemp_c,
                condition: d.day.condition
              }
            }
          )
        }
     
      console.log(data);
    });
  }



}
