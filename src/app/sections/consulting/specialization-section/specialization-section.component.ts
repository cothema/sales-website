import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-specialization-section',
  templateUrl: './specialization-section.component.html',
  styleUrls: ['./specialization-section.component.scss']
})
export class SpecializationSectionComponent implements OnInit {
  faUtensils = faUtensils;
  faShoppingCart = faShoppingCart;
  faIndustry = faIndustry;
  faSuitcase = faSuitcase;
  faArrowRight = faArrowRight;
  @Input() showMoreBtn = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
