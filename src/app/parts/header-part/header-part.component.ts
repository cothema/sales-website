import { Component, Input, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { TranslateService } from '@ngx-translate/core';
import { MenuItemModel } from '../../repository/menu/menu-item.model';
import { MenuRepositoryService } from '../../repository/menu/menu-repository.service';
import { LangService } from '../../services/lang.service';

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
  menuItems: MenuItemModel[] = [];
  @Input() subBrand;
  @Input() color;
  @Input() changeLangLink;

  constructor(
    public menuRepository: MenuRepositoryService,
    private translateService: TranslateService,
    private langService: LangService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.lang = this.translateService.currentLang;
    this.menuItems = await this.menuRepository.getAll();
    this.siteMenuClone();
    this.initSiteSticky();
    this.initSiteScroll();
  }

  async onChangeLang(lang: string) {
    return this.langService.changeLang(lang, this.changeLangLink);
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
