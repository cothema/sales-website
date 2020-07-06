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
    this.translate.use(lang);
    return this.initLang();
  }

  public async init(): Promise<any> {
    return this.initLang();
  }

  private initLang(): Promise<any> {
    return new Promise<any>((resolve: any) => {
      const locationInitialized = this.injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
      locationInitialized.then(() => {
        this.translate.use(this.translate.currentLang).subscribe(() => {
          // Successfully initialized language.
        }, err => {
          console.error(`Problem with '${this.translate.currentLang}' language initialization.'`);
        }, () => {
          resolve(null);
        });
      });
    });
  }
}
