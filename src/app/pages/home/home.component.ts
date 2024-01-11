import { Component } from '@angular/core';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {
    AOS.init();
  }
}
