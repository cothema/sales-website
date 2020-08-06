import { Component, OnDestroy, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../../service/seo.service';

@Component({
  selector: 'app-ecommerce-field-page',
  templateUrl: './ecommerce-field-page.component.html',
  styleUrls: ['./ecommerce-field-page.component.scss']
})
export class EcommerceFieldPageComponent implements OnInit, OnDestroy {
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;
  faTag = faTag;

  constructor(
    private seo: SeoService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.seo.setData({
      title: this.translate.instant('section.specialization.ecommerce.h')
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }

}
