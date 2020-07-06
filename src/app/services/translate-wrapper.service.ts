import { LOCATION_INITIALIZED } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageKeys } from '../enums/storage-keys';
import { LocalStorageService } from './storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class TranslateWrapperService {
  private defaultLang = 'en';

  constructor(private translate: TranslateService, private storage: LocalStorageService, private injector: Injector) {
  }

  public async setLanguage(lang: string): Promise<any> {
    this.storage.store(StorageKeys.LANG, lang);
    this.translate.setDefaultLang(lang);
    return this.initAndUseLang(lang);
  }

  public async init(): Promise<any> {
    const storedLang = this.storage.get(StorageKeys.LANG);

    let lang = this.defaultLang;

    if (storedLang) {
      lang = storedLang;
    } else {
      const browserLang = this.translate.getBrowserLang();

      switch (browserLang) {
        case 'en':
          lang = 'en';
        case 'cs':
          lang = 'cz';
      }
    }

    return this.setLanguage(lang);
  }

  private initAndUseLang(langToSet: string): Promise<any> {
    return new Promise<any>((resolve: any) => {
      const locationInitialized = this.injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
      locationInitialized.then(() => {
        this.translate.use(langToSet).subscribe(() => {
          // Successfully initialized language.
        }, err => {
          console.error(`Problem with '${langToSet}' language initialization.'`);
        }, () => {
          resolve(null);
        });
      });
    });
  }
}
