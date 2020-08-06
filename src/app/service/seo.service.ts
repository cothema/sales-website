import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SeoSocialShareData, SeoSocialShareService } from 'ngx-seo';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  public baseUrl = window.location.protocol + '//' + window.location.hostname;
  public brandTitle = 'Cothema';
  public defaultImage = this.baseUrl + '/assets/image/og_cover.png';

  constructor(
    public readonly socialService: SeoSocialShareService,
    private translate: TranslateService,
    private router: Router
  ) {
  }

  setDefault() {
    this.socialService.setData({
      title: this.brandTitle + ' | ' + this.translate.instant('section.coverOutsourcing.h1'),
      description: this.translate.instant('section.coverOutsourcing.p1'),
      image: this.defaultImage,
      url: this.baseUrl + this.router.url,
      keywords: this.getDefaultKeywords()
    });
  }

  setData(param: SeoSocialShareData) {
    if (param.title) {
      param.title = param.title + ' | ' + this.brandTitle;
    }

    if (!param.url) {
      param.url = this.baseUrl + this.router.url;
    }

    if (!param.image) {
      param.image = this.defaultImage;
    }

    if (!param.keywords) {
      param.keywords = this.getDefaultKeywords();
    }

    this.socialService.setData(param);
  }

  private getDefaultKeywords(): string {
    // TODO: translate
    return 'startup,b2b,sales,saas,outsourcing';
  }
}
