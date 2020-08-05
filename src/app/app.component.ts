import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import * as AOS from 'aos';
import { FacebookService, InitParams } from 'ngx-facebook';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sales-website';

  /**
   * The onLangChange subscription to update the component if the language change.
   * see: https://github.com/ngx-translate/core/issues/565
   * @type {any}
   */
  onLangChange: Subscription = undefined;

  constructor(
    private el: ElementRef,
    private langService: LangService,
    private facebookService: FacebookService,
    private translate: TranslateService,
    spinnerService: NgxSpinnerService
  ) {
    spinnerService.show();
    setTimeout(() => {
      spinnerService.hide();
    }, 600);
  }

  ngOnInit() {
    this.langService.initLanguage(this.el);
    this.onLangChange = this.translate.onLangChange.subscribe(() => {
      this.langService.initLanguage(this.el);
    });

    this.initAOS();
    this.initFacebookService();
  }

  ngOnDestroy() {
    if (this.onLangChange !== undefined) {
      this.onLangChange.unsubscribe();
    }
  }

  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v3.2' };
    this.facebookService.init(initParams);
  }

  /**
   * Animate on scroll library
   * @see https://michalsnik.github.io/aos/
   */
  private initAOS() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: false
    });
  }
}
