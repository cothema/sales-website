import { Component, OnInit } from '@angular/core';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.scss']
})
export class TermsPageComponent implements OnInit {
  faBalanceScale = faBalanceScale;

  constructor() {
  }

  ngOnInit(): void {
  }

}
