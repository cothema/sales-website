import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { HowItWorksPageComponent } from './how-it-works-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HowItWorksPageComponent
      }
    ])
  ]
})
export class HowItWorksPageModule { }
