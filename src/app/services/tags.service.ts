import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private translateService: TranslateService
  ) {
  }

  translate(tags: string[], fn: (string) => string): string[] {
    let out = [];

    for (let tag of tags) {
      let translated = this.translateService.instant('tags.' + tag);

      if (fn) {
        translated = fn(translated);
      }

      out.push(translated);
    }

    return out;
  }

  toKeywords(tags: string[]): string {
    return this.translate(tags, (tag) => tag.toLowerCase()).join(',');
  }
}
