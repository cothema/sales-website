import { Component, OnInit } from '@angular/core';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';

@Component({
  selector: 'app-salespeople-and-consultants-page',
  templateUrl: './salespeople-and-consultants-page.component.html',
  styleUrls: ['./salespeople-and-consultants-page.component.scss']
})
export class SalespeopleAndConsultantsPageComponent implements OnInit {

  subBrandColor = '#d85d06';
  faSuitcase = faSuitcase
  tags = ['consulting', 'innovations'];

  constructor() { }

  ngOnInit(): void {
  }

}
