import { Component } from '@angular/core';
import { NgbCarousel, NgbSlide, NgbSlideEventDirection } from '@ng-bootstrap/ng-bootstrap';
import { NgbSingleSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [NgbCarousel, NgbSlide],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {

  onSignleSlideEvent($event: NgbSingleSlideEvent) {
    console.log('onSignleSlideEvent', $event);
  }

}
