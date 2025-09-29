import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceCategory } from '../service.model';
import { getCategoryFragment } from '../get-category-fragment.util';
import { serviceCategories } from '../service-categories.data';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly serviceCategories = serviceCategories;

  getCategoryDescription(category: ServiceCategory): string {
    return category.services.map(s => s.name).join(', ');
  }

  getCategoryFragment(category: string): string {
    return getCategoryFragment(category);
  }
}
