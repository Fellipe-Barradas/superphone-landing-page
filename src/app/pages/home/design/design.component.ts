import { Component } from '@angular/core';
import Aos from 'aos';
@Component({
  selector: 'app-design',
  standalone: true,
  imports: [],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {

  constructor() {
    Aos.init();
  }
}
