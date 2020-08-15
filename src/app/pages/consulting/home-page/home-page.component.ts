import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(
    private seo: SeoService
  ) {
  }

  ngOnInit(): void {
    this.seo.setDefault();
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }
}
