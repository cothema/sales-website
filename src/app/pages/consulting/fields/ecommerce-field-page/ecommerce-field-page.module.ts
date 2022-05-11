import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { EcommerceFieldPageComponent } from './ecommerce-field-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: EcommerceFieldPageComponent
      }
    ])
  ]
})
export class EcommerceFieldPageModule {
}
