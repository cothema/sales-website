import { Component, OnDestroy, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-how-it-works-page',
  templateUrl: './how-it-works-page.component.html',
  styleUrls: ['./how-it-works-page.component.scss']
})
export class HowItWorksPageComponent implements OnInit, OnDestroy {
  faUsers = faUsers;

  constructor(
    private seo: SeoService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.seo.setData({
      title: this.translate.instant('page.howItWorks.salesOutsourcing')
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }

}
