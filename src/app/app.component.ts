import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

import * as AOS from 'aos';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sales-website';
  actualDate = new Date();
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;

  constructor(private facebookService: FacebookService) {}

  ngOnInit() {
    this.initAOS();
    this.initFacebookService();
  }

  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v3.2' };
    this.facebookService.init(initParams);
  }

  /**
   *
   * Animate on scroll library
   * @see https://michalsnik.github.io/aos/
   */
  private initAOS() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: false,
    });
  }
}
