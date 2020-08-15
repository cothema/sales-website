import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss'],
})
export class AboutUsSectionComponent implements OnInit {
  faLink = faLink;

  constructor() {}

  ngOnInit(): void {}
}
