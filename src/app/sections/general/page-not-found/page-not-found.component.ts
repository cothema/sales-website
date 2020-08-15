import { Component, OnInit } from '@angular/core';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons/faMapSigns';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  faMapSigns = faMapSigns;

  constructor() { }

  ngOnInit(): void {
  }

}
