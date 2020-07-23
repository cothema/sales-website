import { Component, OnInit } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-gastro-field-page',
  templateUrl: './gastro-field-page.component.html',
  styleUrls: ['./gastro-field-page.component.scss']
})
export class GastroFieldPageComponent implements OnInit {
  faUtensils = faUtensils;

  constructor() {
  }

  ngOnInit(): void {
  }

}
