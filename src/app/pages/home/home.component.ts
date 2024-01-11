import { Component } from '@angular/core';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import AOS from 'aos';
import { ApresetationComponent } from './apresetation/apresetation.component';
import { DesignComponent } from './design/design.component';
import { FeaturesComponent } from './features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent, ApresetationComponent, DesignComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {
    AOS.init();
  }
}
