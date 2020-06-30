import { Component, OnInit } from "@angular/core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { TranslateService } from "@ngx-translate/core";

import * as AOS from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "sales-website";
  actualDate = new Date();
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;

  constructor(
    translate: TranslateService
  ) {
    const browserLang = translate.getBrowserLang();

    let defaultLang = "en";

    switch (browserLang) {
      case "cs":
        defaultLang = "cz";
    }

    translate.setDefaultLang(defaultLang);
    translate.use(defaultLang);
  }

  ngOnInit() {
    this.initAOS();
  }

  /**
   *
   * Animate on scroll library
   * @see https://michalsnik.github.io/aos/
   */
  private initAOS() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: false
    });
  }
}
