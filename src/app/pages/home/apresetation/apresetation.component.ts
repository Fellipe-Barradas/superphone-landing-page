import { Component } from '@angular/core';
import Aos from 'aos';
@Component({
  selector: 'app-apresetation',
  standalone: true,
  imports: [],
  templateUrl: './apresetation.component.html',
  styleUrl: './apresetation.component.scss'
})
export class ApresetationComponent {
  constructor() {
    Aos.init();
  }
}
