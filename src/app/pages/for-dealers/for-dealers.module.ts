import { NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ForDealersComponent } from './for-dealers.component';

declare var $: any;

@NgModule({
  declarations: [ForDealersComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForDealersComponent,
      },
    ]),
  ],
})
export class ForDealersModule implements OnInit {
  async ngOnInit(): Promise<void> {
    $('.loader').fadeOut('slow');
    $('#overlayer').fadeOut('slow');
  }
}
