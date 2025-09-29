import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'da']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|da/) ? browserLang : 'en');
  }
}
