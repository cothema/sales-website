import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-cover-expansion-section',
  templateUrl: './cover-expansion-section.component.html',
  styleUrls: ['./cover-expansion-section.component.scss']
})
export class CoverExpansionSectionComponent implements OnInit {
  faCheck = faCheck;
  tags = ['expansion', 'resellerNetwork', 'salesOutsourcing', 'b2b', 'saas', 'startups', 'innovations'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
