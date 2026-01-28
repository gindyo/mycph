import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

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
export class AppComponent implements OnInit {
  constructor(
    translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    translate.addLangs(['en', 'da']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|da/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    // Update page title on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const title = this.getTitle(this.activatedRoute);
        this.titleService.setTitle(title);
      });
  }

  private getTitle(route: ActivatedRoute): string {
    let title = 'My Nails CPH';
    
    if (route.snapshot.data['title']) {
      title = route.snapshot.data['title'];
    } else if (route.firstChild) {
      title = this.getTitle(route.firstChild);
    }
    
    return title;
  }
}
