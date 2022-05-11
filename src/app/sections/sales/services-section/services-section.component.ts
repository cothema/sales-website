import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faHeadset } from '@fortawesome/free-solid-svg-icons/faHeadset';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
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
  faHeadset = faHeadset;
  @Input() expansion = false;
  faInfoCircle = faInfoCircle;

  constructor() {
  }

  ngOnInit(): void {
  }
}
