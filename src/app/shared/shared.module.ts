import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule.forChild()],
  exports: [CommonModule, TranslateModule]
})

export class SharedModule {
}
