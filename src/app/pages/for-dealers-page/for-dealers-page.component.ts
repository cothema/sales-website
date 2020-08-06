import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-for-dealers-page',
  templateUrl: './for-dealers-page.component.html',
  styleUrls: ['./for-dealers-page.component.scss']
})
export class ForDealersPageComponent implements OnInit, OnDestroy {
  constructor(
    private seo: SeoService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.seo.setData({
      title: this.translate.instant('menu.forDealers')
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }
}
