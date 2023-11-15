import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyWeatherService } from './services/my-weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private mw = inject(MyWeatherService);

  flag = true;

  constructor(){}

  ngOnInit(){
    this.mw.getForeCast().subscribe((data) => {
      console.log(data);
    });
  }

}
