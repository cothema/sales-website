import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';

@Component({
  selector: 'app-footer-part',
  templateUrl: './footer-part.component.html',
  styleUrls: ['./footer-part.component.scss']
})
export class FooterPartComponent implements OnInit {
  faFacebookF = faFacebookF;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faUsers = faUsers;
  actualDate = new Date();

  ngOnInit(): void {
  }

}
