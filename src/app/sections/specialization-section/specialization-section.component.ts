import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-specialization-section',
  templateUrl: './specialization-section.component.html',
  styleUrls: ['./specialization-section.component.scss']
})
export class SpecializationSectionComponent implements OnInit {
  faUtensils = faUtensils;
  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
