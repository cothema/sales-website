import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CodeOfEthicsPageComponent } from './code-of-ethics-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CodeOfEthicsPageComponent
      }
    ])
  ]
})
export class CodeOfEthicsPageModule {
}
