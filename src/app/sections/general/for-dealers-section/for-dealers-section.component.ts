import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

@Component({
  selector: 'app-for-dealers-section',
  templateUrl: './for-dealers-section.component.html',
  styleUrls: ['./for-dealers-section.component.scss']
})
export class ForDealersSectionComponent implements OnInit {
  faHeart = faHeart;

  constructor() {
  }

  ngOnInit(): void {
  }
}
