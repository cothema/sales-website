import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { MenuItem } from '../../services/menu.service';

@Component({
  selector: '[menuItems]',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  @Input('items') items: MenuItem[];
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
