import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.scss']
})
export class CareerPageComponent implements OnInit, OnDestroy {
  faSuitcase = faSuitcase;

  constructor(
    private seo: SeoService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.seo.setData({
      title: this.translate.instant('section.forDealers.h')
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }
}
