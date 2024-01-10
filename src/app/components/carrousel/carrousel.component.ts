import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarousel, NgbSlide, NgbSlideEventDirection } from '@ng-bootstrap/ng-bootstrap';
import { NgbSingleSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';

interface Slide {
  id: number;
  src: string;
  alt: string;
  title: string;
  desc: string;
}
@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [NgbCarousel, NgbSlide, CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {

  slides: Slide[] = [
    {
      id: 1,
      src: '../../../assets/images/celular_image_1.png',
      alt: 'First slide',
      title: 'Introduzindo o SuperPhone',
      desc: 'Sua solução completa para conectividade móvel avançada. Explore a integração perfeita de tecnologia de ponta e design elegante.'
    },
    {
      id: 2,
      src: '../../../assets/images/celular_image_2.png',
      alt: 'Second slide',
      title: 'Capture Every Detail',
      desc: 'Equipped with dual cameras for stunning photos and videos. Experience professional-level photography with our state-of-the-art camera system.'
    },
    {
      id: 3,
      src: '../../../assets/images/celular_image_3.png',
      alt: 'Third slide',
      title: 'Faming on the Go',
      desc: 'Transform your smartphone into a gaming console with the detachable controller. Enjoy a truly immersive gaming experience anywhere, anytime.'
    }
  ];

}
