import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Today } from '../../model/today';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent {
  @Input() data!: Today;

}
