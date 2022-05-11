import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { JsonLdService, SeoSocialShareData, SeoSocialShareService } from 'ngx-seo';
import { JsonLd } from 'ngx-seo/lib/json-ld';
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
    private router: Router,
    private readonly jsonLdService: JsonLdService
  ) {
    // See: https://json-ld.org/
    this.jsonLdService.setData([
      this.getJsonLdWebsite(),
      this.getJsonLdOrganization()
    ]);
  }

  setDefault() {
    this.socialService.setData({
      title: this.brandTitle + ' | ' + this.translate.instant('section.coverSalesOutsourcing.h1'),
      description: this.translate.instant('section.coverConsultation.p1'),
      image: this.defaultImage,
      url: this.getUrl(),
      keywords: this.getDefaultKeywords(),
      type: 'website'
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

    if (!param.type) {
      param.type = 'website';
    }

    this.socialService.setData(param);
  }

  public getUrl() {
    return this.baseUrl + this.router.url;
  }

  private getJsonLdWebsite(): JsonLd {
    return this.jsonLdService.getObject('Website', {
      name: 'Cothema',
      url: 'https://cothema.com/'
    });
  }

  private getJsonLdOrganization(): JsonLd {
    return this.jsonLdService.getObject('Organization', {
      name: 'Cothema s.r.o.',
      url: 'https://cothema.com/',
      sameAs: [
        'https://www.facebook.com/cothemacom'
      ]
    });
  }

  private getDefaultKeywords(): string {
    // TODO: translate
    return 'startup,b2b,sales,saas,outsourcing';
  }
}
