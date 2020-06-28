import { NgModule } from "@angular/core";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { SharedModule } from "../../shared/shared.module";
import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";

@NgModule({
  declarations: [BlogComponent],
  imports: [
    SharedModule,
    BlogRoutingModule,
    ScullyLibModule,
  ]
})
export class BlogModule {
}
