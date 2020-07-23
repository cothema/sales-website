import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { GastroFieldPageComponent } from './gastro-field-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: GastroFieldPageComponent
      }
    ])
  ]
})
export class GastroFieldPageModule {
}
