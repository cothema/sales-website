import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

declare var $: any;

@Component({
  selector: 'app-expansion-page',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) { }

  async ngOnInit(): Promise<void> {
    $(".loader").fadeOut("slow");
    $("#overlayer").fadeOut("slow");

    const routeData = await this.route.snapshot.data;
    let langParam = await this.route.snapshot.paramMap.get("lang");
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
