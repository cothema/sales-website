import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuService } from '../../services/menu.service';
import { TranslateWrapperService } from '../../services/translate-wrapper.service';

declare var $: any;

@Component({
  selector: 'app-header-part',
  templateUrl: './header-part.component.html',
  styleUrls: ['./header-part.component.scss']
})
export class HeaderPartComponent implements OnInit {
  lang: string;
  faBars = faBars;
  faTimes = faTimes;
  @Input() subBrand;

  constructor(
    private translateService: TranslateService,
    private translateWrapperService: TranslateWrapperService,
    private localize: LocalizeRouterService,
    public menu: MenuService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.lang = this.translateService.currentLang;
    this.siteMenuClone();
    this.initSiteSticky();
    this.initSiteScroll();
  }

  async onChangeLang(lang: string) {
    this.spinner.show();
    this.localize.changeLanguage(lang, { preserveFragment: true }, true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  private initSiteScroll() {
    $(window).scroll(function() {
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
      topSpacing: 0
    });
  }

  private siteMenuClone() {
    setTimeout(function() {
      let counter = 0;
      $('.site-mobile-menu .has-children').each(function() {
        const $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'data-target': '#collapseItem' + counter
        });

        $this.find('> ul').attr({
          class: 'collapse',
          id: 'collapseItem' + counter
        });

        counter++;
      });
    }, 1000);

    $('body').on('click', '.arrow-collapse', function(e) {
      const $this = $(this);
      if ($this.closest('li').find('.collapse').hasClass('show')) {
        $this.closest('li').find('.collapse').removeClass('show');
        $this.removeClass('active');
      } else {
        $this.closest('li').find('.collapse').addClass('show');
        $this.addClass('active');
      }
      e.preventDefault();
    });

    $(window).resize(function() {
      const $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });

    $('body').on('click', '.js-menu-toggle', function(e) {
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
    $(document).mouseup(function(e) {
      const container = $('.site-mobile-menu');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  }
}
