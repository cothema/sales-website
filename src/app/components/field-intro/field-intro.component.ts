import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { FieldRepositoryService } from '../../repository/field/field-repository.service';
import { FieldModel } from '../../repository/field/field.model';

@Component({
  selector: 'app-field-intro',
  templateUrl: './field-intro.component.html',
  styleUrls: ['./field-intro.component.scss']
})
export class FieldIntroComponent implements OnInit {

  @Input() fieldId;
  field?: FieldModel;
  faArrowRight = faArrowRight;

  constructor(
    private fieldRepositoryService: FieldRepositoryService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.field = await this.fieldRepositoryService.getById(this.fieldId);
  }

}
