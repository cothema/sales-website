import { ElementRef, Injectable } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private el: ElementRef;

  constructor(
    private translate: TranslateService,
    private localize: LocalizeRouterService,
    private spinner: NgxSpinnerService
  ) {
  }

  async changeLang(lang: string) {
    this.spinner.show();
    this.localize.changeLanguage(lang, { preserveFragment: true }, true);
    setTimeout(() => {
      window.location.reload();
    }, 600);
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
