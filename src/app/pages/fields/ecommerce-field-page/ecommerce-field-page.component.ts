import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-ecommerce-field-page',
  templateUrl: './ecommerce-field-page.component.html',
  styleUrls: ['./ecommerce-field-page.component.scss']
})
export class EcommerceFieldPageComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;
  faTag = faTag;

  constructor() {
  }

  ngOnInit(): void {
  }

}
