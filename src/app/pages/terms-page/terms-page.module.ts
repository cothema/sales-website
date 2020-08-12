import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TermsPageComponent } from './terms-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TermsPageComponent
      }
    ])
  ]
})
export class TermsPageModule {
}
