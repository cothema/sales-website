import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { MenuItemModel } from '../../repository/menu/menu-item.model';

@Component({
  selector: '[menuItems]',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  @Input() items: MenuItemModel[];
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
