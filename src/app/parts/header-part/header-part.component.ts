import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../services/menu.service';
import { TranslateWrapperService } from '../../services/translate-wrapper.service';

@Component({
  selector: 'app-header-part',
  templateUrl: './header-part.component.html',
  styleUrls: ['./header-part.component.scss']
})
export class HeaderPartComponent implements OnInit {
  lang: string;
  faBars = faBars;
  faTimes = faTimes;

  constructor(
    private translateService: TranslateService,
    private translateWrapperService: TranslateWrapperService,
    private localize: LocalizeRouterService,
    public menu: MenuService
  ) {
  }

  ngOnInit(): void {
    this.lang = this.translateService.currentLang;
  }

  onChangeLang(lang: string) {
    this.localize.changeLanguage(lang);
  }
}
