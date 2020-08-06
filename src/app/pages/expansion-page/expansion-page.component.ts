import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-expansion-page',
  templateUrl: './expansion-page.component.html',
  styleUrls: ['./expansion-page.component.scss']
})
export class ExpansionPageComponent implements OnInit, OnDestroy {
  constructor(
    private seo: SeoService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.seo.setDefault();
  }

  ngOnDestroy(): void {
    this.seo.setDefault();
  }
}
