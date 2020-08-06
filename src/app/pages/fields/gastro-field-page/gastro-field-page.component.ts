import { Component, OnDestroy, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../../service/seo.service';

@Component({
  selector: 'app-gastro-field-page',
  templateUrl: './gastro-field-page.component.html',
  styleUrls: ['./gastro-field-page.component.scss']
})
export class GastroFieldPageComponent implements OnInit, OnDestroy {
  faTag = faTag;
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;
  subBrandColor = '#23863a';

  constructor(
    private seo: SeoService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.seo.setData({
      title: this.translate.instant('section.specialization.gastro.h')
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }

}
