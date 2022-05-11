import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FieldRepositoryService } from '../../../../repository/field/field-repository.service';
import { FieldModel } from '../../../../repository/field/field.model';
import { SeoService } from '../../../../services/seo.service';
import { TagsService } from '../../../../services/tags.service';

@Component({
  selector: 'app-ecommerce-field-page',
  templateUrl: './ecommerce-field-page.component.html',
  styleUrls: ['./ecommerce-field-page.component.scss']
})
export class EcommerceFieldPageComponent implements OnInit, OnDestroy {
  field?: FieldModel;
  fieldId = 'ecommerce';
  tags = ['consulting', 'innovations'];

  constructor(
    private seo: SeoService,
    private translate: TranslateService,
    private tagsService: TagsService,
    private fieldRepositoryService: FieldRepositoryService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.loadField();

    this.seo.setData({
      title: this.translate.instant('section.specialization.ecommerce.h'),
      keywords: this.tagsService.toKeywords(this.field.tags)
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }

  private async loadField(): Promise<void> {
    this.field = await this.fieldRepositoryService.getById(this.fieldId);
  }

}
