import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page.component';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogPageComponent
  },
  {
    path: '**',
    component: BlogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
