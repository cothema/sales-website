import { NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CareerPageComponent } from './career-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CareerPageComponent
      }
    ])
  ]
})
export class CareerPageModule implements OnInit {
  async ngOnInit(): Promise<void> {
  }
}
