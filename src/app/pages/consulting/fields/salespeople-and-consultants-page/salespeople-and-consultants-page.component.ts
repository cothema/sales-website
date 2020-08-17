import { Component, OnInit } from '@angular/core';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-salespeople-and-consultants-page',
  templateUrl: './salespeople-and-consultants-page.component.html',
  styleUrls: ['./salespeople-and-consultants-page.component.scss']
})
export class SalespeopleAndConsultantsPageComponent implements OnInit {

  subBrandColor = '#d85d06';
  faSuitcase = faSuitcase;
  tags = ['consulting', 'innovations'];
  faIndustry = faIndustry;
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;

  constructor() {
  }

  ngOnInit(): void {
  }

}
