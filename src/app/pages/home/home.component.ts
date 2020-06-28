import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
  }

  async ngOnInit(): Promise<void> {
    const routeData = await this.route.data;
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
