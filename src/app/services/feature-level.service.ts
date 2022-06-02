import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { StorageKeys } from '../enums/storage-keys';
import { LocalStorageService } from './storage/local-storage';

@Injectable({
  providedIn: 'root',
})
export class FeatureLevelService {
  LEVEL_NONE = 0; // Feature is hidden for everyone
  LEVEL_DEV = 10; // Feature is visible only for developers
  LEVEL_BETA = 20; // Feature is visible for beta testers
  LEVEL_PROD = 30; // Feature is visible for all

  constructor(private storage: LocalStorageService) {
    const levelInStorage = this.currentLevelInStorage;
    this._currentLevel = levelInStorage !== null ? levelInStorage : this.defaultLevel;
  }

  private _currentLevel;

  get currentLevel(): number {
    return this._currentLevel;
  }

  set currentLevel(value: number) {
    if ([this.LEVEL_DEV, this.LEVEL_BETA, this.LEVEL_PROD].includes(value)) {
      this.storage.store(StorageKeys.FEATURE_LEVEL_KEY, value.toString());
      this._currentLevel = value;
    } else {
      console.error('Invalid value!');
    }
  }

  private get defaultLevel(): number {
    if (environment.hasOwnProperty('staging') && environment.staging === true) {
      return this.LEVEL_BETA;
    } else if (environment.hasOwnProperty('production') && environment.production === false) {
      return this.LEVEL_DEV;
    }
    return this.LEVEL_PROD;
  }

  private get currentLevelInStorage(): number | null {
    const storageValue = this.storage.get(StorageKeys.FEATURE_LEVEL_KEY);

    return storageValue !== null ? +storageValue : null;
  }

  isAvailable(requiredMinimumLevel: number): boolean {
    return requiredMinimumLevel >= this._currentLevel;
  }
}
