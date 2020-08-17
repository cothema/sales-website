import { Component, OnInit } from '@angular/core';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-manufacturing-and-industry-page',
  templateUrl: './manufacturing-and-industry-page.component.html',
  styleUrls: ['./manufacturing-and-industry-page.component.scss']
})
export class ManufacturingAndIndustryPageComponent implements OnInit {
  subBrandColor = '#333333';
  faIndustry = faIndustry;
  tags = ['consulting', 'innovations'];
  faShoppingCart = faShoppingCart;
  faSuitcase = faSuitcase;
  faUtensils = faUtensils;

  constructor() {
  }

  ngOnInit(): void {
  }

}
