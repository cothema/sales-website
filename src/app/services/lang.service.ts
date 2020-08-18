import { ElementRef, Injectable } from '@angular/core';
import { Event, Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private el: ElementRef;

  constructor(
    private translate: TranslateService,
    private localize: LocalizeRouterService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
  }

  async changeLang(lang: string, routerLink?: string) {
    await this.spinner.show();

    this.router.events.pipe(first()).subscribe(async (event: Event) => {
      if (routerLink) {
        routerLink = this.localize.translateRoute(routerLink).toString();

        setTimeout(async () => {
          await this.router.navigate([routerLink]);
          window.location.reload();
        }, 0);
      } else {
        setTimeout(() => {
          window.location.reload();
        }, 0);
      }
    });

    this.localize.changeLanguage(lang, { preserveFragment: true }, true);
  }

  initLanguage(el: ElementRef) {
    this.el = el;
    this.updateHtmlLang();
  }

  getIsoLang(): string {
    return this.urlLangToIsoLang(this.translate.currentLang);
  }

  urlLangToIsoLang(lang: string): string {
    switch (lang) {
      case 'cz':
        return 'cs';
      default:
        return lang;
    }
  }

  private updateHtmlLang() {
    const lang = document.createAttribute('lang');
    lang.value = this.getIsoLang();
    this.el.nativeElement.parentElement.parentElement.attributes.setNamedItem(lang);
  }
}
