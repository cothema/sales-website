import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private listening = false;
  private checkInterval = 60 * 1000;

  constructor(
    private swUpdate: SwUpdate,
    private snackbar: MatSnackBar,
    private translate: TranslateService
  ) {
  }

  async listen(): Promise<void> {
    if (this.listening) {
      return;
    }
    this.listening = true;

    let _reload = await this.translate.get('btn.reload').pipe(take(1)).toPromise();
    let _updateAvailable = await this.translate.get('msg.updateAvailable').pipe(take(1)).toPromise();

    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackbar.open(_updateAvailable, _reload);
      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });
    });

    if (this.swUpdate.isEnabled) {
      setInterval(() => {
        this.swUpdate.checkForUpdate();
      }, this.checkInterval);
    }
  }
}
