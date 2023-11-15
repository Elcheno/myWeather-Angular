import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, take } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MyWeatherService {

  private http = inject(HttpClient);

  constructor() { }

  //Creamos una función que al llamarla devuelve un observable configurado esplicitamente para nuesto caso
  getForeCast(): Observable<any> {
    //Utilizamos HttpClient de Angular para hacer la petición http, lo cual devuelve un observable
    //Utilizamos el archivo environment para alojar los parámetros y la propia url que vamos a llamar 
    return this.http.get(`${environment.apis.weather.url}
      &key=${environment.apis.weather.key}
      &q=${environment.apis.weather.testPosition}`)
      .pipe(map(response => { //Lo concatenamos con un pipe para poder filtrar la salida mediante un map
        const { current, ...info } = response as any;
        return info;
      }),
        map(res => { //Volvemos a concatenar un map dentro de la pipe para comprobar como podemos modificar la salida de forma anidada
          return { 'location': res.location, 'forecast': res.forecast.forecastday }
        }),
        take(1) // Cuando recibe un next completa la subscripción cerrandola.
      )
  }

}
