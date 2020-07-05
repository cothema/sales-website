import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {}

  async ngOnInit(): Promise<void> {
    const routeData = await this.route.data;
    let langParam = await this.route.snapshot.paramMap.get('lang');
    if (!langParam) {
      langParam = routeData['lang'];
    }

    if (langParam) {
      this.translate.use(langParam);
    } else {
      this.translate.use(this.translate.getDefaultLang());
    }

    $('.loader').fadeOut('slow');
    $('#overlayer').fadeOut('slow');

    this.siteMenuClone();
    this.initSiteSticky();
    this.initSiteScroll();
  }

  private initSiteScroll() {
    $(window).scroll(function () {
      const st = $(this).scrollTop();

      if (st > 100) {
        $('.js-sticky-header').addClass('shrink');
      } else {
        $('.js-sticky-header').removeClass('shrink');
      }
    });
  }

  private initSiteSticky() {
    $('.js-sticky-header').sticky({
      topSpacing: 0,
    });
  }

  private siteMenuClone() {
    $('.js-clone-nav').each(function () {
      const $this = $(this);
      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    });

    setTimeout(function () {
      let counter = 0;
      $('.site-mobile-menu .has-children').each(function () {
        const $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'data-target': '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          class: 'collapse',
          id: 'collapseItem' + counter,
        });

        counter++;
      });
    }, 1000);

    $('body').on('click', '.arrow-collapse', function (e) {
      const $this = $(this);
      if ($this.closest('li').find('.collapse').hasClass('show')) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      const $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });

    $('body').on('click', '.js-menu-toggle', function (e) {
      const $this = $(this);
      e.preventDefault();

      if ($('body').hasClass('offcanvas-menu')) {
        $('body').removeClass('offcanvas-menu');
        $this.removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $this.addClass('active');
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      const container = $('.site-mobile-menu');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  }
}
