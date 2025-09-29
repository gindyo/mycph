import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceCategory } from '../service.model';
import { getCategoryFragment } from '../get-category-fragment.util';
import { serviceCategories } from '../service-categories.data';

@Component({
  selector: 'app-home',
  imports: [RouterModule, TranslateModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly serviceCategories = serviceCategories;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'da']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|da/) ? browserLang : 'en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  getCategoryDescription(category: ServiceCategory): string {
    return category.services.map(s => s.name).join(', ');
  }

  getCategoryFragment(category: string): string {
    return getCategoryFragment(category);
  }

  hasNotes(category: ServiceCategory): boolean {
    return category.services.some(service => !!service.notes);
  }

  getFirstNote(category: ServiceCategory): string | undefined {
    const serviceWithNote = category.services.find(service => !!service.notes);
    return serviceWithNote?.notes;
  }

  isLastService(category: ServiceCategory, service: any): boolean {
    const services = category.services;
    return services[services.length - 1] === service;
  }

    }
