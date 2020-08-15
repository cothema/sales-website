import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { SalesOutsourcingPageComponent } from './sales-outsourcing-page.component';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SalesOutsourcingPageComponent
      }
    ])
  ]
})
export class SalesOutsourcingPageModule {
}
