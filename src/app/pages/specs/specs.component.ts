import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Spec {
  id: number;
  name: string;
  description: string;
}
@Component({
  selector: 'app-specs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specs.component.html',
  styleUrl: './specs.component.scss'
})
export class SpecsComponent {

  selectedSpec: number = 1;
  specs: Spec[] = [
    {
      id: 1,
      name: 'TELA',
      description: '6.5 polegadas'
    },
    {
      id: 2,
      name: 'PROCESSADOR',
      description: 'Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)'
    },
    {
      id: 3,
      name: 'MEMÓRIA RAM',
      description: '4 GB'
    },
    {
      id: 4,
      name: 'MEMÓRIA INTERNA',
      description: '64 GB'
    },
    {
      id: 5,
      name: 'CÂMERA TRASEIRA',
      description: '48 MP (f/1.8, 26mm, 1/2.0", 0.8µm)'
    },
    {
      id: 6,
      name: 'CÂMERA FRONTAL',
      description: '16 MP (f/2.0, 26mm, 1/3.06", 1.0µm)'
    },
    {
      id: 7,
      name: 'SISTEMA',
      description: 'Android 9.0 (Pie)'
    },
    {
      id: 8,
      name: 'BATERIA',
      description: '3765 mAh'
    }
  ]

  showContent(id: number) {
    this.selectedSpec = id;
  }
}
