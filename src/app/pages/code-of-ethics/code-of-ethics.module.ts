import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CodeOfEthicsComponent } from './code-of-ethics.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CodeOfEthicsComponent,
      },
    ]),
  ],
})
export class CodeOfEthicsModule {}
