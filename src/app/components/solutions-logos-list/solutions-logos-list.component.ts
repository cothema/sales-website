import { Component, Input, OnInit } from '@angular/core';
import { PartnerModel } from '../../repository/partner/partner.model';

@Component({
  selector: 'app-solutions-logos-list',
  templateUrl: './solutions-logos-list.component.html',
  styleUrls: ['./solutions-logos-list.component.scss']
})
export class SolutionsLogosListComponent implements OnInit {

  @Input() partners: PartnerModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
