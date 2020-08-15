import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-cover-sales-outsourcing-section',
  templateUrl: './cover-sales-outsourcing-section.component.html',
  styleUrls: ['./cover-sales-outsourcing-section.component.scss']
})
export class CoverSalesOutsourcingSectionComponent implements OnInit {
  faCheck = faCheck;
  tags = ['salesOutsourcing', 'b2b', 'saas', 'startups', 'innovations'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
