import { Component, OnInit } from "@angular/core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { TranslateService } from "@ngx-translate/core";
import { TranslateWrapperService } from "../../services/translate-wrapper.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  lang: string;
  faExternalLinkAlt = faExternalLinkAlt;

  constructor(
    private translateService: TranslateService,
    private translateWrapperService: TranslateWrapperService
  ) {
  }

  ngOnInit(): void {
    this.lang = this.translateService.currentLang;
  }

  onChangeLang(lang: string) {
    this.translateWrapperService.setLanguage(lang);
  }
}
