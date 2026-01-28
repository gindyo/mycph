import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { getCategoryFragment } from '../get-category-fragment.util';
import { ServiceCategory } from '../service.model';
import { serviceCategories } from '../service-categories.data';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.html',
  styleUrls: ['./price-list.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
})
export class PriceListComponent implements OnInit {
  readonly serviceCategories: ServiceCategory[] = serviceCategories;
  private pageTitle = 'Price List';
  readonly analytics: AnalyticsService;

  getCategoryFragment(category: string): string {
    return getCategoryFragment(category);
  }

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller, public translate: TranslateService, analyticsService: AnalyticsService) {
    this.analytics = analyticsService;
  }

  ngOnInit(): void {
    // Get the page title from route data
    this.route.data.subscribe(data => {
      if (data['title']) {
        this.pageTitle = data['title'];
        document.title = this.pageTitle;
      }
    });
  }

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

  trackBookingClickWithTranslation(serviceName: string): void {
    // Get the translated service name
    const translatedName = this.translate.instant(serviceName);
    this.analytics.trackBookingClick(translatedName);
  }
}
