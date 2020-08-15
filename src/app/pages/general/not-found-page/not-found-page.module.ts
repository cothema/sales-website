import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotFoundPageComponent
      }
    ])
  ]
})
export class NotFoundPageModule {
}
