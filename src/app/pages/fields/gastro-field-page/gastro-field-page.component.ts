import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';

@Component({
  selector: 'app-gastro-field-page',
  templateUrl: './gastro-field-page.component.html',
  styleUrls: ['./gastro-field-page.component.scss']
})
export class GastroFieldPageComponent implements OnInit {
  faTag = faTag;
  faShoppingCart = faShoppingCart;

  constructor() {
  }

  ngOnInit(): void {
  }

}
