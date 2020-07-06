import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-expansion-page',
  templateUrl: './expansion-page.component.html',
  styleUrls: ['./expansion-page.component.scss']
})
export class ExpansionPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {
  }

  async ngOnInit(): Promise<void> {
    const routeData = await this.route.snapshot.data;
    let langParam = await this.route.snapshot.paramMap.get('lang');
    if (!langParam) {
      langParam = routeData['lang'];
    }

    if (langParam) {
      this.translate.use(langParam);
    } else {
      this.translate.use(this.translate.getDefaultLang());
    }
  }
}
