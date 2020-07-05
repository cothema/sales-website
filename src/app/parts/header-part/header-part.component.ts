import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { TranslateService } from '@ngx-translate/core';
import { TranslateWrapperService } from '../../services/translate-wrapper.service';

@Component({
  selector: 'app-header-part',
  templateUrl: './header-part.component.html',
  styleUrls: ['./header-part.component.scss']
})
export class HeaderPartComponent implements OnInit {
  lang: string;
  faExternalLinkAlt = faExternalLinkAlt;
  faBars = faBars;

  constructor(private translateService: TranslateService, private translateWrapperService: TranslateWrapperService) {
  }

  ngOnInit(): void {
    this.lang = this.translateService.currentLang;
  }

  onChangeLang(lang: string) {
    this.translateWrapperService.setLanguage(lang);
  }
}
