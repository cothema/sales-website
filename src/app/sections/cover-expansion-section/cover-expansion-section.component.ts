import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';

@Component({
  selector: 'app-cover-expansion-section',
  templateUrl: './cover-expansion-section.component.html',
  styleUrls: ['./cover-expansion-section.component.scss']
})
export class CoverExpansionSectionComponent implements OnInit {
  faCheck = faCheck;
  faTag = faTag;

  constructor() {
  }

  ngOnInit(): void {
  }

}
