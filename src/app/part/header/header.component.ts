import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  lang: string;

  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
  }

  onChangeLang(lang: string) {
    this.translate.use(lang);
  }
}
