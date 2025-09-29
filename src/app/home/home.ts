import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceCategory } from '../service.model';
import { PriceListComponent } from '../price-list/price-list';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly serviceCategories = new PriceListComponent().serviceCategories;

  getCategoryDescription(category: ServiceCategory): string {
    return category.services.map(s => s.name).join(', ');
  }
}
