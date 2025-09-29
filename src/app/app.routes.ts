import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { PriceListComponent } from './price-list/price-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'price-list', component: PriceListComponent },
];
