import { NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ForDealersPageComponent } from './for-dealers-page.component';

declare var $: any;

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForDealersPageComponent
      }
    ])
  ]
})
export class ForDealersPageModule implements OnInit {
  async ngOnInit(): Promise<void> {
    $('.loader').fadeOut('slow');
    $('#overlayer').fadeOut('slow');
  }
}
