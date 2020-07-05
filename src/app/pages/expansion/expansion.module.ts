import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ExpansionComponent } from './expansion.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExpansionComponent,
      },
    ]),
  ],
})
export class ExpansionModule {}
