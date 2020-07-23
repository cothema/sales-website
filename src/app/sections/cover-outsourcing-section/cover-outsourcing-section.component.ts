import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';

@Component({
  selector: 'app-cover-outsourcing-section',
  templateUrl: './cover-outsourcing-section.component.html',
  styleUrls: ['./cover-outsourcing-section.component.scss']
})
export class CoverOutsourcingSectionComponent implements OnInit {
  faTag = faTag;
  faCheck = faCheck;

  constructor() {
  }

  ngOnInit(): void {
  }
}
