import { Component, OnInit } from '@angular/core';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons/faMapSigns';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
  faMapSigns = faMapSigns;

  constructor() {
  }

  ngOnInit(): void {
  }

}
