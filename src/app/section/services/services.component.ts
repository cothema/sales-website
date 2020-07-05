import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';

@Component({
  selector: 'app-services-section',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  faArrowRight = faArrowRight;
  faLink = faLink;
  faMapMarkerAlt = faMapMarkerAlt;
  faUsers = faUsers;

  constructor() {}

  ngOnInit(): void {}
}
