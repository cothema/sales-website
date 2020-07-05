import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {
  faArrowRight = faArrowRight;
  faMapMarkerAlt = faMapMarkerAlt;
  faUsers = faUsers;

  constructor() {
  }

  ngOnInit(): void {
  }
}
