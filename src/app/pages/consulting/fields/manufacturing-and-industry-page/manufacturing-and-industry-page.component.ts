import { Component, OnInit } from '@angular/core';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';

@Component({
  selector: 'app-manufacturing-and-industry-page',
  templateUrl: './manufacturing-and-industry-page.component.html',
  styleUrls: ['./manufacturing-and-industry-page.component.scss']
})
export class ManufacturingAndIndustryPageComponent implements OnInit {
  subBrandColor = '#333333';
  faIndustry = faIndustry;
  tags = ['consulting', 'innovations'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
