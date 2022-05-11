import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { SharedModule } from '../../../shared/shared.module';
import { BlogListPageComponent } from './blog-list-page/blog-list-page.component';
import { BlogPageComponent } from './blog-page.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: ':slug',
        component: BlogPageComponent
      },
      {
        path: '',
        component: BlogListPageComponent
      }
    ]),
    ScullyLibModule
  ]
})
export class BlogPageModule {
}
