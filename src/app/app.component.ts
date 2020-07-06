import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { FacebookService, InitParams } from 'ngx-facebook';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sales-website';
  translatorInitialized = false;

  constructor(
    private facebookService: FacebookService,
    spinnerService: NgxSpinnerService
  ) {
    spinnerService.show();
    setTimeout(() => {
      spinnerService.hide();
    }, 1000);
  }

  ngOnInit() {
    this.initAOS();
    this.initFacebookService();
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
