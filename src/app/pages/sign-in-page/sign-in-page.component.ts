import { Component, OnDestroy, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit, OnDestroy {
  faSignOutAlt = faSignOutAlt;
  faGoogle = faGoogle;

  constructor(
    public authService: AuthService,
    private seo: SeoService,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.seo.setData({
      title: this.translate.instant('page.signIn.h1')
    });
  }

  ngOnDestroy() {
    this.seo.setDefault();
  }
}
