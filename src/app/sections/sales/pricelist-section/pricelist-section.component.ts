import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';

@Component({
  selector: 'app-pricelist-section',
  templateUrl: './pricelist-section.component.html',
  styleUrls: ['./pricelist-section.component.scss'],
})
export class PricelistSectionComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  constructor() {}

  ngOnInit(): void {}
}
