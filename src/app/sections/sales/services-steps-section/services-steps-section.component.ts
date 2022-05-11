import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';

@Component({
  selector: 'app-services-steps-section',
  templateUrl: './services-steps-section.component.html',
  styleUrls: ['./services-steps-section.component.scss']
})
export class ServicesStepsSectionComponent implements OnInit {
  faLink = faLink;

  constructor() {
  }

  ngOnInit(): void {
  }
}
