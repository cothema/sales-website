import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get(key: string) {
    return window.localStorage.getItem(key);
  }

  store(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  hasKey(key: string): boolean {
    return window.localStorage.getItem(key) !== null;
  }

  remove(key: string) {
    if (this.hasKey(key)) {
      window.localStorage.removeItem(key);
    }
  }

}
