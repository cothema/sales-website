import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FieldRepositoryService } from '../../repository/field/field-repository.service';
import { FieldModel } from '../../repository/field/field.model';

@Component({
  selector: 'app-other-fields',
  templateUrl: './other-fields.component.html',
  styleUrls: ['./other-fields.component.scss']
})
export class OtherFieldsComponent implements OnInit, OnChanges {

  @Input() exceptFieldId?: string;
  fields: FieldModel[] = [];

  constructor(
    private fieldsRepository: FieldRepositoryService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.fields = await this.fieldsRepository.getAll();
  }

  async ngOnChanges(changes: SimpleChanges) {
    this.fields = await this.fieldsRepository.getAll();
  }
}
