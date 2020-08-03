import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sales-university-banner',
  templateUrl: './sales-university-banner.component.html',
  styleUrls: ['./sales-university-banner.component.scss']
})
export class SalesUniversityBannerComponent implements OnInit {
  faArrowRight = faArrowRight;

  constructor(
    public translate: TranslateService
  ) {
  }

  ngOnInit(): void {
  }

}
