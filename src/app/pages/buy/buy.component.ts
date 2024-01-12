import { Component } from '@angular/core';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss'
})
export class BuyComponent {
  total: number = 4200;
  quantity: number = 1;

  increaseQuantity() {
    if (this.quantity < 1) return;
    this.quantity++;
    this.total += 4200;
  }

  decreaseQuantity() {
    if (this.quantity <= 1) return;
    this.quantity--;
    this.total -= 4200;
  }
}
