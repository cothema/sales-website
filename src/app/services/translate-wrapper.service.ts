import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { StorageKeys } from "../enums/storage-keys";
import { LocalStorageService } from "./storage/local-storage";

@Injectable({
  providedIn: "root"
})
export class TranslateWrapperService {
  private defaultLang = 'en';

  constructor(
    private translate: TranslateService,
    private storage: LocalStorageService,
  ) {
    this.init();
  }

  private init() {
    const storedLang = this.storage.get(StorageKeys.LANG);

    let lang = this.defaultLang;

    if (storedLang) {
      lang = storedLang;
    } else {
      const browserLang = this.translate.getBrowserLang();

      switch (browserLang) {
        case "en":
          lang = "en";
        case "cs":
          lang = "cz";
      }
    }

    this.setLanguage(lang);
  }

  public setLanguage(lang: string) {
    this.storage.store(StorageKeys.LANG, lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
