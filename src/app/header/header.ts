import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, TranslateModule],
})
export class HeaderComponent {
  menuOpen = false;

  constructor(public translate: TranslateService) {}

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
