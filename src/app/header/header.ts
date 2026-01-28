import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, TranslateModule, CommonModule],
})
export class HeaderComponent {
  menuOpen = false;
  
  constructor(public translate: TranslateService, private analyticsService: AnalyticsService) {}

  get analytics(): AnalyticsService {
    return this.analyticsService;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  logClick(message: string) {
    console.log(`Clicked on: ${message}`);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
