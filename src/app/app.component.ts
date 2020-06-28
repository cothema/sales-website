import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import * as AOS from "aos";

declare var jQuery: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "sales-website";
  actualDate = new Date();

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
    AOS.init({
      duration: 800,
      easing: "slide",
      once: false
    });

    jQuery(document).ready(function ($) {
        "use strict";

        $(".loader").delay(1000).fadeOut("slow");
        $("#overlayer").delay(1000).fadeOut("slow");

        const siteMenuClone = () => {
          $(".js-clone-nav").each(() => {
            var $this = $(this);
            $this.clone().attr("class", "site-nav-wrap").appendTo(".site-mobile-menu-body");
          });

          setTimeout(() => {
            let counter = 0;
            $(".site-mobile-menu .has-children").each(() => {
              const $this = $(this);

              $this.prepend("<span class=\"arrow-collapse collapsed\">");

              $this.find(".arrow-collapse").attr({
                "data-toggle": "collapse",
                "data-target": "#collapseItem" + counter,
              });

              $this.find("> ul").attr({
                "class": "collapse",
                "id": "collapseItem" + counter,
              });

              counter++;
            });
          }, 1000);

          $("body").on("click", ".arrow-collapse", function (e) {
            const $this = $(this);
            if ($this.closest("li").find(".collapse").hasClass("show")) {
              $this.removeClass("active");
            } else {
              $this.addClass("active");
            }
            e.preventDefault();
          });

          $(window).resize(() => {
            const $this = $(this),
              w = $this.width();

            if (w > 768) {
              if ($("body").hasClass("offcanvas-menu")) {
                $("body").removeClass("offcanvas-menu");
              }
            }
          })

          $("body").on("click", ".js-menu-toggle", (e) => {
            const $this = $(this);
            e.preventDefault();

            if ($("body").hasClass("offcanvas-menu")) {
              $("body").removeClass("offcanvas-menu");
              $this.removeClass("active");
            } else {
              $("body").addClass("offcanvas-menu");
              $this.addClass("active");
            }
          })

          // click outisde offcanvas
          $(document).mouseup((e) => {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
              if ($("body").hasClass("offcanvas-menu")) {
                $("body").removeClass("offcanvas-menu");
              }
            }
          });
        };
        siteMenuClone();

        const OnePageNavigation = () => {
          const navToggler = $(".site-menu-toggle");
          $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
            e.preventDefault();

            const hash = this.hash;

            $("html, body").animate({
              "scrollTop": $(hash).offset().top - 0
            }, 1000, "easeInOutCirc", () => {
              window.location.hash = hash;
            });
          });
        };
        OnePageNavigation();

        const siteScroll = () => {
          $(window).scroll(() => {
            const st = $(this).scrollTop();

            if (st > 100) {
              $(".js-sticky-header").addClass("shrink");
            } else {
              $(".js-sticky-header").removeClass("shrink");
            }
          })
        };
        siteScroll();
      }
    );
  }
}
