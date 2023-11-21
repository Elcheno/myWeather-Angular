import { Injectable, WritableSignal, signal } from '@angular/core';
import { Location } from './../model/Position'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public position: WritableSignal<Location> = signal({lat:0,lng:0})

  constructor() { }

  getLocation(): any{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=> {
          console.log(position) 
          this.position.update(oldValue => {
            return {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        },
        (error) => {
          console.error(error)
        }
      )
    }
  }
}
