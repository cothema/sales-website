import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-gastro-field-page',
  templateUrl: './gastro-field-page.component.html',
  styleUrls: ['./gastro-field-page.component.scss']
})
export class GastroFieldPageComponent implements OnInit {
  faTag = faTag;
  faShoppingCart = faShoppingCart;
  faUtensils = faUtensils;
  subBrandColor = '#23863a';

  constructor() {
  }

  ngOnInit(): void {
  }

}
