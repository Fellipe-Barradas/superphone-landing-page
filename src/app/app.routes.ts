import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SpecsComponent } from './pages/specs/specs.component';
import { BuyComponent } from './pages/buy/buy.component';

export const routes: Routes = [
  { path:"", component: HomeComponent},
  { path: "specs", component: SpecsComponent },
  { path:"buy", component: BuyComponent}
];
