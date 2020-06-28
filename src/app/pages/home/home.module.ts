import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
      },
    ]),
  ]
})
export class HomeModule {
}
