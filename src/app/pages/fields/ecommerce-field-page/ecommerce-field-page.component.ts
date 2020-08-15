import { Component, OnDestroy, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../../services/seo.service';
import { TagsService } from '../../../services/tags.service';

@Component({
  selector: 'app-ecommerce-field-page',
  templateUrl: './ecommerce-field-page.component.html',
  styleUrls: ['./ecommerce-field-page.component.scss']
})
export class EcommerceFieldPageComponent implements OnInit, OnDestroy {
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;
  tags = ['consulting', 'innovations'];

  constructor(
    private seo: SeoService,
    private translate: TranslateService,
    private tagsService: TagsService
  ) {
  }

  ngOnInit(): void {
    this.seo.setData({
      title: this.translate.instant('section.specialization.ecommerce.h'),
      keywords: this.tagsService.toKeywords(this.tags)
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }

}
