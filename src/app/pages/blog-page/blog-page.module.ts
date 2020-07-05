import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { SharedModule } from '../../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, BlogRoutingModule, ScullyLibModule]
})
export class BlogPageModule {
}
