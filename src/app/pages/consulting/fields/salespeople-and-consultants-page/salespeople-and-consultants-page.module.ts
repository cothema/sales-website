import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { SalespeopleAndConsultantsPageComponent } from './salespeople-and-consultants-page.component';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SalespeopleAndConsultantsPageComponent
      }
    ])
  ]
})
export class SalespeopleAndConsultantsPageModule {
}
