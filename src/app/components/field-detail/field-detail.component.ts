import { Component, Input } from '@angular/core';
import { FieldModel } from '../../repository/field/field.model';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.scss']
})
export class FieldDetailComponent {

  @Input() field?: FieldModel;

  constructor() {
  }

}
