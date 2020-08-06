import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SeoSocialShareData, SeoSocialShareService } from 'ngx-seo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  public baseUrl = environment.baseUrl;
  public brandTitle = 'Cothema';
  public defaultImage = this.baseUrl + '/assets/images/og_cover.png';

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
      url: this.getUrl(),
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

  public getUrl() {
    return this.baseUrl + this.router.url;
  }

  private getDefaultKeywords(): string {
    // TODO: translate
    return 'startup,b2b,sales,saas,outsourcing';
  }
}
