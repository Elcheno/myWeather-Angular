import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyWeatherService {

  constructor(
    private http:HttpClient
    ) { }

  getForeCast():Observable<any>{
   return this.http.get('http://api.weatherapi.com/v1/forecast.json?key=fc8c689bc9604eb0b1e113628231411&q=37.668335,-4.725080&days=3&aqi=no&alerts=no');
  }

}
