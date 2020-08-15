import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PartnershipPageComponent } from './partnership-page.component';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PartnershipPageComponent
      }
    ])
  ]
})
export class PartnershipPageModule {
}
