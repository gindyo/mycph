import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { getCategoryFragment } from '../get-category-fragment.util';
import { ServiceCategory } from '../service.model';
import { serviceCategories } from '../service-categories.data';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.html',
  styleUrls: ['./price-list.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListComponent implements AfterViewInit {
  readonly serviceCategories: ServiceCategory[] = serviceCategories;
  getCategoryFragment(category: string): string {
    return getCategoryFragment(category);
  }

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Timeout ensures DOM is rendered
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 0);
      }
    });
  }
}
