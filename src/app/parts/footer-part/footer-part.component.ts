import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

@Component({
  selector: 'app-footer-part',
  templateUrl: './footer-part.component.html',
  styleUrls: ['./footer-part.component.scss']
})
export class FooterPartComponent implements OnInit {
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  actualDate = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
