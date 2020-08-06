import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-code-of-ethics-page',
  templateUrl: './code-of-ethics-page.component.html',
  styleUrls: ['./code-of-ethics-page.component.scss']
})
export class CodeOfEthicsPageComponent implements OnInit, OnDestroy {
  constructor(
    private seo: SeoService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.solveSeo();
  }

  ngOnDestroy(): void {
    this.seo.setDefault();
  }

  private solveSeo() {
    this.seo.setData({
      title: this.translate.instant('menu.codeOfEthics')
    });
  }

}
