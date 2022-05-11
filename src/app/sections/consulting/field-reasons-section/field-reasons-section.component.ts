import { Component, OnInit } from '@angular/core';
import { faCrown } from '@fortawesome/free-solid-svg-icons/faCrown';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';

@Component({
  selector: 'app-field-reasons-section',
  templateUrl: './field-reasons-section.component.html',
  styleUrls: ['./field-reasons-section.component.scss']
})
export class FieldReasonsSectionComponent implements OnInit {
  faUserTie = faUserTie;
  faCrown = faCrown;
  faHeart = faHeart;

  constructor() {
  }

  ngOnInit(): void {
  }

}
