import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { ManufacturingAndIndustryPageComponent } from './manufacturing-and-industry-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ManufacturingAndIndustryPageComponent
      }
    ])
  ]
})
export class ManufacturingAndIndustryPageModule {
}
