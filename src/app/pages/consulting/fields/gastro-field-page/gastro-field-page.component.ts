import { Component, OnDestroy, OnInit } from '@angular/core';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../../../services/seo.service';
import { TagsService } from '../../../../services/tags.service';

@Component({
  selector: 'app-gastro-field-page',
  templateUrl: './gastro-field-page.component.html',
  styleUrls: ['./gastro-field-page.component.scss']
})
export class GastroFieldPageComponent implements OnInit, OnDestroy {
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;
  subBrandColor = '#23863a';
  tags = ['consulting', 'innovations'];
  faIndustry = faIndustry;
  faSuitcase = faSuitcase;

  constructor(
    private seo: SeoService,
    private translate: TranslateService,
    private tagsService: TagsService
  ) {
  }

  ngOnInit(): void {
    this.seo.setData({
      title: this.translate.instant('section.specialization.gastro.h'),
      keywords: this.tagsService.toKeywords(this.tags)
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }

}
