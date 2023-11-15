import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, take } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MyWeatherService {

<<<<<<< HEAD
  private http = inject(HttpClient);

  constructor() { }
=======
>>>>>>> dd259d604fb08e17af30aebaf91f188e335362c1

  getForeCast(): Observable<any> {
    return this.http.get(`${environment.apis.weather.url}
      &key=${environment.apis.weather.key}
      &q=${environment.apis.weather.testPosition}`)
      .pipe(map(response => {
        const { current, ...info } = response as any;
        return info;
      }),
        map(res => {
          return { 'location': res.location, 'forecast': res.forecast.forecastday }
        }),
        take(1)
      )
  }

}
