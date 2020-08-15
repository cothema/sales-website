import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ExpansionPageComponent } from './expansion-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExpansionPageComponent
      }
    ])
  ]
})
export class ExpansionPageModule {
}
