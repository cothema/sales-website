import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FieldRepositoryService } from '../../../../repository/field/field-repository.service';
import { FieldModel } from '../../../../repository/field/field.model';
import { SeoService } from '../../../../services/seo.service';
import { TagsService } from '../../../../services/tags.service';

@Component({
  selector: 'app-salespeople-and-consultants-page',
  templateUrl: './salespeople-and-consultants-page.component.html',
  styleUrls: ['./salespeople-and-consultants-page.component.scss']
})
export class SalespeopleAndConsultantsPageComponent implements OnInit, OnDestroy {
  subBrandColor = '#d85d06';
  field?: FieldModel;
  fieldId = 'salespeopleAndConsultants';
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
      title: this.translate.instant('section.specialization.salespeopleAndConsultants.h'),
      keywords: this.tagsService.toKeywords(this.tags)
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }

  private async loadField(): Promise<void> {
    this.field = await this.fieldRepositoryService.getById(this.fieldId);
  }

}
