import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons/faMousePointer';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

@Component({
  selector: 'app-partnership-page',
  templateUrl: './partnership-page.component.html',
  styleUrls: ['./partnership-page.component.scss']
})
export class PartnershipPageComponent implements OnInit {
  faHandshake = faHandshake;
  faUser = faUser;
  faMousePointer = faMousePointer;
  faCode = faCode;
  faArrowRight = faArrowRight;

  constructor() {
  }

  ngOnInit(): void {
  }

}
