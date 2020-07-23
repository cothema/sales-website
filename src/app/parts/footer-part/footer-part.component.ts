import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-part',
  templateUrl: './footer-part.component.html',
  styleUrls: ['./footer-part.component.scss']
})
export class FooterPartComponent implements OnInit {
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faArrowRight = faArrowRight;
  actualDate = new Date();

  constructor(
    public translate: TranslateService
  ) {
  }

  ngOnInit(): void {
  }

}
