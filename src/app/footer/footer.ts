import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(private analyticsService: AnalyticsService) {}

  get analytics(): AnalyticsService {
    return this.analyticsService;
  }
}
